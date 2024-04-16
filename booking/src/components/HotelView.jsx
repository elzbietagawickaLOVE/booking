import { useParams } from "react-router-dom";

const HotelView = (props) => {
    const hotel = props.hotels.find(hotel => hotel.id === useParams().id);

    return (
        <div>
        <h1>Hotel View</h1>
        <h2>{hotel.name}</h2>
        </div>
    );
    }

export default HotelView;