import { useApolloClient, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Link, Routes } from 'react-router-dom'
import { ALL_HOTELS, ME } from './queries/hotelQueries'
import HotelList from './components/HotelList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import HotelForm from './components/HotelForm'
import Home from './components/Home'
import HotelView from './components/HotelView'

//**************ŁĄCZENIE Z SERWEREM*********************/
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authorization'));
  const [user, setUser] = useState(null);


  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  }

  const resultUser = useQuery(ME, {
    pollInterval: 500
  }
  );
  const handleUser = (data) => {
    if(data?.data?.me !== undefined) {
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
    return <p>Error</p>;
  }
  return (<>
{/************************RÓŻOWY PASEK****************************/}

<Router>
      <div className='coolblock'>
          <Link to='/'><img className="outofbar" src='fulllogo.png' alt="Logo Bootle"/></Link>
        <li class="nav-item" style={{ zIndex: '1000', position: 'absolute', top: '10px', right: '1rem', listStyleType: 'none'}}>
        {token === null ? <Link class="nav-link btn btn-outline-light" style={{ position: 'absolute', right: '0', top: '0', fontSize: '9px' }} to="/login">LOGIN</Link> : <div class="btn-group">
  <div type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white'}}>
    {user?.username}
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Moje rezerwacje</a></li>
    <li><a class="dropdown-item" href="#">Ustawienia</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#" onClick={logout}>Wyloguj</a></li>
  </ul>
</div>}
      </li>
      </div>
{/*****************************NAV BAR****************************************/}

<nav class="navbar navbar-expand-lg navbar-light bg-white" style={{ width: '70%', margin: 'auto', padding: '0' }}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '10px', gap: '10px'}}>
      <li class="nav-item">
      <Link class="nav-link" style={{ padding: '0' }} to="/hotels"><button className='btn btn-outline-primary'>Hotele</button></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" style={{ padding: '0' }} to="/hotelForm"><button className='btn btn-outline-primary'>Dodaj hotel</button></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="..." aria-label="..."></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Wyszukaj</button>
    </form>
  </div>
</nav>
        
        <main style={{ width: '70%', margin: 'auto', marginTop: '15px' }}>
        
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/hotels" element={<HotelList hotels={hotels.data.allHotels} />} />
          <Route path='/hotelForm' element={<HotelForm />} />
          <Route path="/login" element={<LoginForm setToken={setToken} token={token} setUser={setUser} />} />
          <Route path="/hotels/:id" element={<HotelView hotels={hotels.data.allHotels} />} />
        </Routes>
        </main>
      </Router>
      
      <footer>
        <div class="przetrzymywacz">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </footer>
  </>
  );
}
{/********************************************************************/}

export default App;

