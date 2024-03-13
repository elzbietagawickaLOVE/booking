import React, { useState } from 'react'
import { Hotel } from '../models/Hotel'
import { Convenience } from '../models/Convenience'
import { useMutation } from '@apollo/client'
import { CREATE_CONVENIENCE } from '../queries/hotelQueries'
import { RoomToAdd } from '../models/RoomToAdd'
import { NumberOfGuests } from '../models/NumberOfGuests'


const HotelForm = () => {
    const [hotel, setHotel] = useState(new Hotel());
    const [numberOfRooms, setNumberOfRooms] = useState(0);
    const handleChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const [room, setRoom] = useState(new RoomToAdd());
    const [rooms, setRooms] = useState([{}]);
    const [numberOfGuests, setNumberOfGuests] = useState(new NumberOfGuests());
    const [convenience, setConvenience] = useState(new Convenience());
    const [imagePaths, setImagePaths] = useState([]);
    const [addConvenience, result] = useMutation(CREATE_CONVENIENCE, {
        onError: (error) => {
            console.log('error', error.graphQLErrors[0].message);
        }
    })
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const paths = files.map(file => URL.createObjectURL(file));
        setImagePaths(paths);
        console.log(imagePaths);
      };
    const saveRoom = () => {
        room.numberOfGuests = numberOfGuests;
        console.log(room);
        setNumberOfRooms(numberOfRooms + 1);
        setNumberOfGuests(new NumberOfGuests());
        setRooms(rooms.concat(room));
        setRoom(new RoomToAdd());
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(hotel)
    }

    const handleConvenienceChange = (e) => {
        setConvenience({ ...convenience, [e.target.name]: e.target.value });
    };

    const handleConvenienceSubmit = (e) => {
        e.preventDefault();
        addConvenience({ variables: { name: convenience.name, description: convenience.description, icon: convenience.icon } });
    }
    
    return (
        <>
        {rooms.map(room => {
            return (
                <div key={room.size}>
                    <p>rozmiar: {room.size}</p>
                    <p>cena: {room.price}</p>
                    <p>dorośli: {room.numberOfGuests?.adults}</p>
                    <p>dzieci: {room.numberOfGuests?.children}</p>
                    <p>niemowlęta: {room.numberOfGuests?.infants}</p>
                </div>
            )

        }
        )}
        <form onSubmit={handleSubmit}>
        nazwa hotelu: <input type="text" className='form-control' name="name" value={hotel.name} onChange={handleChange} />
        adres: <input type="text" className='form-control' name="name" value={hotel.address} onChange={handleChange} />
        link do mapy: <input type="text" className='form-control' name="name" value={hotel.locationUrl} onChange={handleChange} />
        opis: <input type="text" className='form-control' name="name" value={hotel.description} onChange={handleChange} />
        <button type="submit" className='btn btn-primary' style={{marginTop:'20px'}}>Dodaj hotel</button>

        <h2>Dodaj pokoje</h2>
        rozmiar: <input type="text" className='form-control' name="size" value={room.size} onChange={(e) => setRoom({ ...room, size: e.target.value })} />
        cena: <input type="text" className='form-control' name="price" value={room.price} onChange={(e) => setRoom({ ...room, price: e.target.value })} />
        <h3>ilosc osob</h3>
        dorośli: <input type="text" className='form-control' name="adults" value={numberOfGuests.adults} onChange={(e) => setNumberOfGuests({ ...numberOfGuests, adults: e.target.value })} />
        dzieci: <input type="text" className='form-control' name="children" value={numberOfGuests.children} onChange={(e) => setNumberOfGuests({ ...numberOfGuests, children: e.target.value })} />
        niemowlęta: <input type="text" className='form-control' name="infants" value={numberOfGuests.infants} onChange={(e) => setNumberOfGuests({ ...numberOfGuests, infants: e.target.value })} />
        zdjecia: <input type='file' className='form-control' onChange={handleFileChange} name="photos" multiple/>
        <button type="submit" className='btn btn-primary' onClick={saveRoom} style={{marginTop:'20px'}}>nastepny pokoj</button>
        </form>
        

        <form onSubmit={handleConvenienceSubmit}>
        nazwa udogodnienia: <input type="text" className='form-control' name="name" value={convenience.name} onChange={handleConvenienceChange} />
        opis: <input type="text" className='form-control' name="description" value={convenience.description} onChange={handleConvenienceChange} />
        ikona: <input type="text" className='form-control' name="icon" value={convenience.icon} onChange={handleConvenienceChange} />
        <button type="submit" className='btn btn-primary' style={{marginTop:'20px'}}>Dodaj udogodnienie</button>
        </form>

            
        </>
            
    );
    };

export default HotelForm;