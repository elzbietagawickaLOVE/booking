import { useState } from 'react'
// fun fact footerprimitive.png jest po to żeby zobaczyć jakby ta fala wygląda i jak kolor czcionki do niej pasuje ale chyba nie działa (napewno nie działa)
function App() {
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

      <footer style={{ backgroundColor: '#333', color: '#550a30', padding: '20px', textAlign: 'center',backgroundImage: 'url("footerprimitive.png")', backgroundSize: '50%' }}> 
        <p>Stopka</p>
      </footer>
    </div>
  );
}

export default App;
