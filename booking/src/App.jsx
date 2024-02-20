import { useApolloClient, useQuery } from '@apollo/client';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_HOTELS } from './queries/hotelQueries'
import HotelList from './components/hotelList'

// fun fact footerprimitive.png jest po to żeby zobaczyć jakby ta fala wygląda i jak kolor czcionki do niej pasuje ale chyba nie działa (na pewno nie działa)

const App = () => {
  const client = useApolloClient();
  const hotels = useQuery(ALL_HOTELS, {
    pollInterval: 5000,
  });
  
  if (hotels.loading) return <p>Loading...</p>;
  if (hotels.error) return <p>Error</p>;
  return (
    <div>
      <header style={{ backgroundColor: '#e84686', color: '#550a30', padding: '20px', display: 'flex', alignItems: 'center' }}>
        <img src='logo.png' height="5%" width="5%" alt="Logo Bootle" style={{marginRight: '10px'}} />
        <h1>Bootle</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <h2>Treść główna</h2>
        <p>To jest treść główna twojej strony.</p>
        
      </main>
      <HotelList hotels={hotels.data.allHotels} />
      <footer style={{ backgroundColor: '#333', color: '#550a30', padding: '20px', textAlign: 'center',backgroundImage: 'url("footerprimitive.png")', backgroundSize: '50%' }}> 
        <p>Stopka</p>
      </footer>
    </div>
  );
}

export default App;
