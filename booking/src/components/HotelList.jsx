const HotelList = (props) => {
    const countAverageRating = (ratings) => {
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        return sum / ratings.length;
    }

    return (
        <div>
        <h1>Hotel List</h1>
        <div className="card" style={{ float: 'left', height: '500px', width: '30%', marginRight: '10px' }}>

        </div>
            {props.hotels.map(hotel => (
                <div key={hotel.id} className="card" style={{ marginBottom: '20px', width: 'calc(70% - 10px)', padding: '10px', justifyContent: 'start', flexDirection: 'row' }}>
                    
                    <div style={{ width: '30%', height: '100%'}}>
                        <img src='https://a.allegroimg.com/original/11d339/8dc922454e49bc8fa639ffa3dbda/DORIS-NEMO-RYBKA-DO-AKWARIUM-PREZENT-WIGILIJNY' width='200px' height='100%' alt="..." />
                        </div>
                    <div style={{ width: '50%', height: '100%'}}>
                        <h4 className='card-title hotelName'><a href="#">{hotel.name}</a></h4>
                        <p className="card-text"><a href="#">{hotel.address}</a> - <a href="#">Pokaż na mapie</a></p>
                        <p className="card-text">{hotel.description}</p>
                        
                    </div>
                    <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '0px'}}>
                        <p className="card-text" style={{ height: '25px', margin: '0', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>{countAverageRating(hotel.ratings) > 4 ? 'Bardzo dobry' : countAverageRating(hotel.ratings) > 2 ? 'Dobry' : 'Zły'} <p style={{ marginLeft: '10px', marginTop: '16px', marginRight: '10px', textAlign: 'center', alignItems: 'center'}}>-</p> <div style={{ clipPath: 'polygon(6% 7%, 100% 0%, 93% 93%, 0% 100%)', backgroundColor: '#9c7200', color: 'white', display: 'flex', justifyContent: 'center', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px' }}>{countAverageRating(hotel.ratings)}</div></p>
                        <p className="card-text" style={{ marginBottom: '32px'}}>{hotel.ratings.length} Opinii</p>
                        <p className="card-text" style={{ color: 'transparent' }}>a </p>
                        <a href="#" style={{ position: 'absolute', bottom: '10px', right: '10px'}} className="btn btn-primary">Zobacz dostępność</a>
                    </div>
                </div>
            ))}
        </div>
    );
    }

export default HotelList;