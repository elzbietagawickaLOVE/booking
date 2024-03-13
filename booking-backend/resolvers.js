const Hotel = require('./models/hotel')
const Room = require('./models/room')
const Facility = require('./models/convenience')
const NumberOfGuests = require('./models/numberOfGuests')
const mongoose = require('mongoose')
const fs = require('fs')
const { GraphQLError } = require('graphql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/user')

const facilityResolver = async (facilities) => {
    return await Promise.all(
        args.facilities.map(async facility => {
            const foundFacility = await Facility.findOne({ name: facility.name });
            if(foundFacility) {
                return foundFacility._id;
            }
            else {
                const newFacility = new Facility({ ...facility })
                const savedFacility = await newFacility.save()
                return savedFacility._id
            }
        })
    )
}

const resolvers = {
    Query: {
        hotelCount: () => Hotel.collection.countDocuments(),
        allHotels: async (context) => { 
            if(context === null)
                return []
            return await Hotel.find({}).populate('rooms')
 },
        allRooms: async () => { return await Room.find({}) },
        allFacilities: async () => { return await Facility.find({}) },
        me: async (root, args, context) => {
            if(context === null)
                return null
            return await context.currentUser
        }
    },
    Hotel: {
        rooms: async (root) => {
            return await Room.find({ hotel: root._id })
        },
        facilities: async (root) => {
            return await Facility.find({ _id: { $in: root.facilities } })
        }
    },
    Mutation: {
        addHotel: async (root, args) => {
            const facilities = facilityResolver(args.facilities)

            const rooms = await Promise.all(
                args.rooms.map(async room => {
                    const imagePaths = await Promise.all(
                        room.imagePaths = room.imagePaths.map(imagePath => {
                            const image = fs.readFileSync(imagePath)
                            return new Buffer.from(image).toString('base64')
                        })
                    )
                    const roomFacilities = facilityResolver(room.facilities)
                    const newRoom = new Room({ ...room, images: imagePaths, facilities: roomFacilities})
                    const savedRoom = await newRoom.save()
                    return savedRoom._id
                })
            )

            const hotel = new Hotel({ ...args, rooms, facilities, ratings: [], comments: []})
            return hotel.save()
        },
        addRoom: async (root, args) => {
            const roomId = new mongoose.Types.ObjectId()
            
            const imagePaths = await Promise.all(
                args.imagePaths = args.imagePaths.map(imagePath => {
                    const image = fs.readFileSync(imagePath)
                    return new Buffer.from(image).toString('base64')
                })
            )

            const room = new Room({ ...args, images: imagePaths, _id: roomId})
            return room.save()
        },
        addFacility: async (root, args) => {
            const facilityId = new mongoose.Types.ObjectId()
            const facility = new Facility({ ...args, _id: facilityId})
            return facility.save()
        },
        addNumberOfGuests: async (root, args) => {
            const numberOfGuests = new NumberOfGuests({ ...args })
            return numberOfGuests.save()
        },
        createUser: async (root, args) => {
            const user = new User({ username: args.username, passwordHash: await bcrypt.hash(args.password, 10), email: args.email, bookings: [], comments: []})
            return user.save()
            .catch(error => {
                throw new GraphQLError('Creating the user failed', {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                        invalidArgs: args.username,
                        error
                    }
                })
            })
        },
        login: async (root, args) => {
            const user = await User.findOne({ username: args.username })
            if(!user || !(await bcrypt.compare(args.password, user.passwordHash)) || typeof user.passwordHash === 'undefined') {
                throw new GraphQLError('Invalid username or password')
            }
            const userForToken = {
                username: user.username,
                id: user._id
            }
            return { value: jwt.sign(userForToken, process.env.SECRET) }
    }  } 
}

module.exports = resolvers