const HotelList = (props) => {
    const hotels = props.hotels;
    console.log(hotels);
    return (
        <div>
        <h1>Hotel List</h1>
        <ul>
            {props.hotels.map(hotel => (
            <li key={hotel.id}>
                {hotel.name} - {hotel.id}
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default HotelList;