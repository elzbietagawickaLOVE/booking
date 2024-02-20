const typeDefs = `
    type Hotel {
        id: ID!
        name: String!
        address: String!
        locationUrl: String!
        description: String!
        rooms: [Room!]
        facilities: [Facility!]!
        comments: [Comment!]!
        ratings: [Int!]
    }

    type Room {
        size: Int!
        numberOfGuests: NumberOfGuests!
        dailyPrice: Int!
        hotel: Hotel!
        facilities: [Facility!]!
        images: [String]
        ratings: [Int!]
    }

    type Booking {
        startDate: String!
        endDate: String!
        room: Room!
        user: User!
        totalPrice: Float!
    }

    type User {
        username: String!
        email: String!
        passwordHash: String!
        bookings: [Booking!]
        comments: [Comment!]
    }

    type Comment {
        text: String!
        hotel: Hotel!
        user: User!
        date: String!
    }

    type Facility {
        name: String!
        description: String!
        icon: String!
    }

    type NumberOfGuests {
        adults: Int!
        children: Int!
        infants: Int!
    }

    type Query {
        hotelCount: Int!
        allHotels: [Hotel!]!
        allRooms: [Room!]!
        allFacilities: [Facility!]!
        me: User
    }

    type Token {
        value: String!
    }

    type Mutation {
        addHotel(
            name: String!
            address: String!
            locationUrl: String!
            description: String!
            rooms: [RoomInput!]
            facilities: [FacilityInput!]
            comments: [String!]
        ): Hotel
        addRoom(
            size: Int!
            numberOfGuests: Int!
            dailyPrice: Int!
            imagePaths: [String!]
            facilities: [FacilityInput!]
        ): Room
        addFacility(
            name: String!
        ): Facility
        addNumberOfGuests(
            adults: Int!
            children: Int!
            infants: Int!
        ): NumberOfGuests
        createUser(
            username: String!
            email: String!
            password: String!
        ): User
        login(
            username: String!
            password: String!
        ): Token
    }

    input RoomInput {
        size: Int!
        numberOfGuests: NumberOfGuestsInput!
        dailyPrice: Int!
        facilities: [FacilityInput!]
        images: [String!]

    }

    input NumberOfGuestsInput {
        adults: Int!
        children: Int!
        infants: Int!
    }

    input FacilityInput {
        name: String!
        description: String!
        icon: String!
    }
`;

module.exports = typeDefs;