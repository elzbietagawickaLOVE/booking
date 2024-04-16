import { useParams } from "react-router-dom";
let i = 1;
const HotelView = (props) => {
    const hotel = props.hotels.find(hotel => hotel.id === useParams().id);
    console.log(hotel);
    return (
        <div style={{ height: '700px'}}>
        <div style={{ width: 'calc(50% - 10px)', marginRight: '10px', float: 'left', height: '400px' }}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ width: '100%', height: '100%' }}>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" style={{ width: '100%', height: '100%' }}>
                <div style={{ height: '100%'}} class="carousel-item active">
                <img class="d-block w-100 h-100" width="100%" height="100%" style={{ height: '100%', objectFit: 'cover'}} src="https://media.steelseriescdn.com/blog/posts/how-to-play-valorants-new-agent-killjoy/1612325126a14ac2b2d2a1a03e58fd3a.webp" alt="First slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block h-100 w-100" src="https://staticg.sportskeeda.com/editor/2022/10/15166-16669340150845-1920.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://media.steelseriescdn.com/blog/posts/how-to-play-valorants-new-agent-killjoy/1612325126a14ac2b2d2a1a03e58fd3a.webp" alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        <div className="card" style={{ width: '50%', height: '400px', backgroundColor: 'white', float: 'left', padding: '10px' }}>
            <h2>{hotel.name}</h2>
            <h5>adres: {hotel.address}<a href="#"> zobacz na mapie</a></h5>
            <h5>opis: {hotel.description}</h5>
            <h4 style={{ marginTop: '210px' }}>recenzje:</h4>
            {hotel.ratings.map(rating => i++ + '; ' + String.prototype.repeat.call('⭐', rating)).join('\n')}
            <button className='btn btn-primary' style={{ position: 'absolute', bottom: '10px', right: '10px'}}>Zarezerwuj</button>
        </div>
        <div className="card" style={{ width: '100%', height: '300px', backgroundColor: 'white', float: 'left', padding: '10px', marginTop: '10px' }}>
            <h2>Recenzje:</h2>
            <h6>{hotel.ratings.map(rating => (i++ + '; ' + String.prototype.repeat.call('⭐', rating)) + '\n') }</h6>
        </div>
        </div>
    );
    }

export default HotelView;