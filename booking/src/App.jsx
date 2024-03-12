import { useApolloClient, useQuery } from '@apollo/client';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_HOTELS } from './queries/hotelQueries'
import HotelList from './components/hotelList'

//**************ŁĄCZENIE Z SERWEREM*********************/
const App = () => {
  const client = useApolloClient();
  const hotels = useQuery(ALL_HOTELS, {
    pollInterval: 5000,
  });
  
  if (hotels.loading) return <p>Loading...</p>;
  if (hotels.error) return <p>Error</p>;
  return (
//************************RÓŻOWY PASEK****************************/
    <div>
      <div className='coolblock'>
        <a href="App.jsx">
          <img className="outofbar" src='fulllogo.png' alt="Logo Bootle"/>
        </a>
      </div>
{/*****************************NAV BAR****************************************/}
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" style={{ color: 'transparent'}}>Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" style={{ color: 'transparent'}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link4</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{/**********************TREŚĆ GŁÓWNEJ STRONY**************************/}
      <main style={{ padding: '20px' }}>
        <h2>Treść główna</h2>
        <p>To jest treść główna twojej strony.</p>
        
      </main>
      <HotelList hotels={hotels.data.allHotels} />
      <footer>
        <div class="przetrzymywacz">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </footer>
    </div>
  );
}
{/********************************************************************/}

export default App;
{/**********************notatka do commita*************************************** 

*********************************************************************************/}
