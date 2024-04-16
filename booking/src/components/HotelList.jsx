import React from 'react';
import { Link } from 'react-router-dom';

const HotelList = (props) => {
    const countAverageRating = (ratings) => {
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        return sum / ratings.length;
    }

    const filters = [
        { name: 'basen', count: 3060 },
        { name: 'prywatna łazienka', count: 13804 },
        { name: 'widok na morze', count: 1802 },
        { name: 'Domy', count: 2454 },
        { name: 'parking', count: 14865 },
        { name: 'zwierzęta domowe są akceptowane', count: 7524 },
        { name: 'Hotele', count: 318 },
        { name: 'bezpłatne Wi-Fi', count: 13605 },
      ];

    const cities = [
        { name: 'Warszawa', count: 3060 },
        { name: 'Kraków', count: 13804 },
        { name: 'Gdańsk', count: 1802 },
        { name: 'Wrocław', count: 2454 },
        { name: 'Poznań', count: 14865 },
        { name: 'Szczecin', count: 7524 },
        { name: 'Lublin', count: 318 },
        { name: 'Katowice', count: 13605 },
      ];
    return (
        <div style={{ height: '1000px'}}>
        <h1>Znaleziono: {props.hotels.length} obiektów</h1>
        <div className="card" style={{ float: 'left', padding: '10px', display: 'inline-block', width: '30%', marginRight: '10px', backgroundColor: 'white' }}>
            <h4>Filtruj według następujących kryteriów:</h4>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#e84686', marginBottom: '10px' }}></div>
            <h3>Popularne filtry</h3>
            {filters.map(filter => (
                <div key={filter.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px'}}>
                    <p style={{ verticalAlign: 'center', fontSize: '15px', fontWeight: '600' }}><input type="checkbox" style={{ height: '15px', width: '15px' }}></input> {filter.name}</p>
                    <p>{filter.count}</p>
                </div>
            ))}
            <div style={{ width: '100%', height: '2px', backgroundColor: '#e84686', marginBottom: '10px' }}></div>
            <h3>Miasta</h3>
            {cities.map(city => (
                <div key={city.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0px'}}>
                    <p style={{ verticalAlign: 'center', fontSize: '17px', fontWeight: '600' }}><input type="checkbox" style={{ height: '20px', width: '20px' }}></input> {city.name}</p>
                    <p>{city.count}</p>
                </div>
            ))}
        </div>
            {props.hotels.map(hotel => (
                <div key={hotel.id} className="card" style={{ marginBottom: '20px', width: 'calc(70% - 10px)', padding: '10px', justifyContent: 'start', flexDirection: 'row', background: 'white' }}>
                    
                    <div style={{ width: '30%', height: '100%'}}>
                        <img src='https://a.allegroimg.com/original/11d339/8dc922454e49bc8fa639ffa3dbda/DORIS-NEMO-RYBKA-DO-AKWARIUM-PREZENT-WIGILIJNY' width='200px' height='100%' alt="..." />
                        </div>
                    <div style={{ width: '50%', height: '100%'}}>
                        <h4 className='card-title hotelName'><a href="#"><Link to={ hotel.id}>{hotel.name}</Link></a></h4>
                        <p className="card-text"><a href="#">{hotel.address}</a> - <a href="#">Pokaż na mapie</a></p>
                        <p className="card-text">{hotel.description}</p>
                        
                    </div>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '0px'}}>
                        <p className="card-text" style={{ height: '25px', margin: '0', display: 'flex', justifyContent: 'end', fontWeight: 'bold', alignItems: 'center' }}>{countAverageRating(hotel.ratings) > 4 ? 'Bardzo dobry' : countAverageRating(hotel.ratings) > 2 ? 'Dobry' : 'Zły'} <p style={{ marginLeft: '10px', marginTop: '16px', marginRight: '10px', textAlign: 'center', alignItems: 'center'}}>-</p> <div style={{ clipPath: 'polygon(6% 7%, 100% 0%, 93% 93%, 0% 100%)', backgroundColor: '#99ddff', fontWeight: 'bold', color: 'white', display: 'flex', justifyContent: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px' }}>{countAverageRating(hotel.ratings)}</div></p>
                        <p className="card-text" style={{ marginBottom: '32px', fontWeight: 'bold'}}>{hotel.ratings.length} Opinii</p>
                        <p className="card-text" style={{ color: 'transparent' }}>a </p>
                        <a href="#" style={{ position: 'absolute', bottom: '10px', right: '10px'}} className="btn btn-primary">Zobacz dostępność</a>
                    </div>
                </div>
            ))}
        </div>
    );
    }

export default HotelList;