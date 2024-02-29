import { useApolloClient, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Link, Routes } from 'react-router-dom'
import { ALL_HOTELS, ME } from './queries/hotelQueries'
import HotelList from './components/hotelList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/loginForm'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authorization'));
  const [user, setUser] = useState(null);


  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  }

  const resultUser = useQuery(ME, {
    pollInterval: 5000
  }
  );
  const handleUser = (data) => {
    console.log('data', data)
    if(data !== undefined) {
      setUser(data.data.me);
    }
  }

  useEffect(() => {
    handleUser(resultUser);
  }, [resultUser.data]);
  
  const client = useApolloClient();
  const hotels = useQuery(ALL_HOTELS, {
    pollInterval: 5000,
  });

  if (hotels.loading) return <p>Loading...</p>;
  if (hotels.error) {
    console.log(hotels.error)
    return <p>Error</p>;
  }
  return (
    <div>
      <header style={{ backgroundColor: '#e84686', color: '#550a30', padding: '20px', display: 'flex', alignItems: 'center' }}>
        <img src='logo.png' height="5%" width="5%" alt="Logo Bootle" style={{marginRight: '10px'}} />
        <h1>Bootle</h1>
      </header>
      {user ? <p>Logged in as {user.username}</p> : null}
      {token ? <button onClick={logout}>Logout</button> : null}
      <main style={{ padding: '20px', width: '1200px', margin: 'auto' }}>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/hotels" element={<HotelList hotels={hotels.data.allHotels} />} />
          <Route path="/login" element={<LoginForm setToken={setToken} token={token} setUser={setUser} />} />
        </Routes>
      </Router>
      </main>
      <footer style={{ backgroundColor: '#333', color: '#550a30', padding: '20px', textAlign: 'center',backgroundImage: 'url("footerprimitive.png")', backgroundSize: '50%' }}> 
        <p>Stopka</p>
      </footer>
    </div>
  );
}

export default App;
