import React, { useState } from 'react'
import { Hotel } from '../models/Hotel'
import { Convenience } from '../models/Convenience'
import { useMutation } from '@apollo/client'
import { CREATE_CONVENIENCE } from '../queries/hotelQueries'
import { RoomToAdd } from '../models/RoomToAdd'
import { NumberOfGuests } from '../models/NumberOfGuests'
import { CREATE_HOTEL } from '../queries/hotelQueries'

const HotelForm = () => {
    const [hotel, setHotel] = useState(new Hotel());
    const [numberOfRooms, setNumberOfRooms] = useState(0);
    const handleChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };
    const [room, setRoom] = useState(new RoomToAdd());
    const [rooms, setRooms] = useState([new RoomToAdd()]);
    const [numberOfGuests, setNumberOfGuests] = useState(new NumberOfGuests());
    const [convenience, setConvenience] = useState(new Convenience());
    const [imagePaths, setImagePaths] = useState([]);
    const [addConvenience, result] = useMutation(CREATE_CONVENIENCE, {
        onError: (error) => {
            //console.log('error', error.graphQLErrors[0].message);
        }
    })
    let i = 1;
    const [createHotel, hotelResult] = useMutation(CREATE_HOTEL, {
        onError: (error) => {
            //console.log('error', error.graphQLErrors[0].message);
        }
    })

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const paths = files.map(file => URL.createObjectURL(file));
        setImagePaths(paths);
        //console.log(imagePaths);
      };
    const saveRoom = () => {
        const adults = document.querySelector('input[name="btnradio"]:checked')?.value;
        const children = document.querySelector('input[name="btnradio2"]:checked')?.value;
        const infants = document.querySelector('input[name="btnradio3"]:checked')?.value;
        console.log(adults);
        const numberOfGuests = new NumberOfGuests(adults, children, infants);
        room.numberOfGuests = numberOfGuests;
        //console.log(room);
        setNumberOfRooms(numberOfRooms + 1);
        setNumberOfGuests(new NumberOfGuests());
        setRooms(rooms.concat(room));
        console.log(Object.assign({}, rooms));
        setRoom(new RoomToAdd());
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setHotel({ ...hotel, rooms: Array.of(rooms), facilities: [] });
        //console.log(rooms)
        //console.log(hotel);
        createHotel({ variables: { name: hotel.name, address: hotel.address, locationUrl: hotel.locationUrl, description: hotel.description, rooms: hotel.rooms, facilities: hotel.facilities } })
    }

    const handleConvenienceChange = (e) => {
        setConvenience({ ...convenience, [e.target.name]: e.target.value });
    };

    const handleConvenienceSubmit = (e) => {
        e.preventDefault();
        addConvenience({ variables: { name: convenience.name, description: convenience.description, icon: convenience.icon } });
    }
    
    return (
        <div style={{ height: '1200px' }}>
        <div className='card' style={{ marginBottom: '10px', width: 'calc(50% - 10px)', backgroundColor: 'white', padding: '10px', float: 'left', marginRight: '10px'}}>
            <h2>Dodaj pokój</h2>
            wielkość: (m²)<input type="text" className='form-control' name="size" value={room.size} onChange={(e) => setRoom({ ...room, size: e.target.value })} />
            cena: (za noc)(zł) <input type="text" className='form-control' name="price" value={room.dailyPrice} onChange={(e) => setRoom({ ...room, dailyPrice: e.target.value })} />
            <h3 style={{ marginTop: '10px'}}>ilość osób</h3>
            dorośli: <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', width: '100%'}}><div class="btn-group" width="100%" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check coolblock2" value={1} name="btnradio" id="btnradio1" autoComplete="off" />
                        <label className="btn btn-outline-primary" style={{ borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }} htmlFor="btnradio1">1</label>

                        <input type="radio" className="btn-check" name="btnradio" value={2} id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">2</label>

                        <input type="radio" className="btn-check option" name="btnradio" value={3} id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary option" htmlFor="btnradio3">3</label>

                        <input type="radio" className="btn-check" name="btnradio" value={4} id="btnradio4" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio4">4</label>

                        <input type="radio" className="btn-check" name="btnradio" value={5} id="btnradio5" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio5">5</label>
                    </div></form>
            dzieci: <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', width: '100%'}}><div class="btn-group" width="100%" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check coolblock2" value={1} name="btnradio2" id="btnradio11" autoComplete="off" />
                        <label className="btn btn-outline-primary" style={{ borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }} htmlFor="btnradio11">1</label>

                        <input type="radio" className="btn-check" name="btnradio2" value={2} id="btnradio21" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio21">2</label>

                        <input type="radio" className="btn-check option" name="btnradio2" value={3} id="btnradio31" autoComplete="off" />
                        <label className="btn btn-outline-primary option" htmlFor="btnradio31">3</label>

                        <input type="radio" className="btn-check" name="btnradio2" id="btnradio41" value={4} autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio41">4</label>

                        <input type="radio" className="btn-check" name="btnradio2" id="btnradio51" value={5} autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio51">5</label>
                    </div></form>
            niemowlęta: <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', width: '100%'}}><div class="btn-group" width="100%" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check coolblock2" value={1} name="btnradio3" id="btnradio12" autoComplete="off" />
                        <label className="btn btn-outline-primary" style={{ borderBottomLeftRadius: '3px', borderTopLeftRadius: '3px' }} htmlFor="btnradio12">1</label>

                        <input type="radio" className="btn-check" name="btnradio3" value={2} id="btnradio22" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio22">2</label>

                        <input type="radio" className="btn-check option" name="btnradio3" value={3} id="btnradio32" autoComplete="off" />
                        <label className="btn btn-outline-primary option" htmlFor="btnradio32">3</label>

                        <input type="radio" className="btn-check" name="btnradio3" value={4} id="btnradio42" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio42">4</label>

                        <input type="radio" className="btn-check" name="btnradio3" value={5} id="btnradio52" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio52">5</label>
                    </div></form>
            zdjęcia: <input type='file' className='form-control' onChange={handleFileChange} name="photos" multiple/>
            <button className='btn btn-primary' onClick={saveRoom} style={{marginTop:'20px'}}>następny pokój</button>
        </div>
        <h4>Pokoje ({rooms.length-1})</h4>
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', width: '50%' }}>
        {rooms.slice(1).map(room => {
            return (
                <>
                <h3 style={{ width: 'contain' }}>Pokój nr. {i++}</h3>
                <div key={room.size} className='card' style={{ backgroundColor: 'white', width: '100%', height: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <p style={{ margin: '0' }}>rozmiar: {room.size} m²</p>
                    <p style={{ margin: '0' }}>cena: {room.dailyPrice} zł</p>
                    <p style={{ margin: '0' }}>dorośli: {room.numberOfGuests?.adults}</p>
                    <p style={{ margin: '0' }}>dzieci: {room.numberOfGuests?.children}</p>
                    <p style={{ margin: '0' }}>niemowlęta: {room.numberOfGuests?.infants}</p>
                </div>
                </>
            )

        }
        )}
        </div>
        <div style={{ width: '100%', height: '1px', float: 'left'}}></div>
        <div className='card' style={{  width: 'calc(50% - 10px)', backgroundColor: 'white', padding: '10px', float: 'left'}}>
            <h2>Dodaj hotel</h2>
            <form onSubmit={handleSubmit}>
            <label>nazwa hotelu:</label> <input type="text" className='form-control' name="name" value={hotel.name} onChange={handleChange} />
            adres: <input type="text" className='form-control' name="address" value={hotel.address} onChange={handleChange} />
            link do mapy: <input type="text" className='form-control' name="locationUrl" value={hotel.locationUrl} onChange={handleChange} />
            opis: <input type="text" className='form-control' name="description" value={hotel.description} onChange={handleChange} />
            <button type="submit" className='btn btn-primary' style={{marginTop:'20px', width: '100%'}}>dodaj hotel</button>
            </form>
        </div>
        <div className='card' style={{ float: 'left', padding: '10px', width: '50%', backgroundColor: 'white', marginLeft: '10px' }}>
            <form onSubmit={handleConvenienceSubmit}>
                <h2>Dodaj udogodnienie</h2>
                nazwa udogodnienia: <input type="text" className='form-control' name="name" value={convenience.name} onChange={handleConvenienceChange} />
                opis: <input type="text" className='form-control' name="description" value={convenience.description} onChange={handleConvenienceChange} />
                ikona: <input type="text" className='form-control' name="icon" value={convenience.icon} onChange={handleConvenienceChange} />
                <button type="submit" className='btn btn-primary' style={{marginTop:'20px', width: '100%'}}>dodaj udogodnienie</button>
            </form>
        </div>
            
        </div>
            
    );
    };

export default HotelForm;