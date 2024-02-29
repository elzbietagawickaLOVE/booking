const HotelList = (props) => {
    return (
        <div>
        <h1>Hotel List</h1>
            {props.hotels.map(hotel => (
                <div key={hotel.id} className="card" style={{ marginBottom: '20px' }}>
                    <div className="card-header">
                        {hotel.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{hotel.name}</h5>
                        <p className="card-text">{hotel.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    );
    }

export default HotelList;