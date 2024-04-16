import React, { useState } from 'react';
import Youtube from 'react-youtube';
const Home = ({ user }) => {
    const [youtubeID] = useState('bjCGFOV-GJU?si=NgVHlmri6okuOMx0')


    return (
        <div>
        <h1>{user === null ? 'Error' : user?.username}, dokąd tym razem?</h1>
        <h3 style={{ color: 'grey', marginTop: '25px' }}>Twój nadchodzący wyjazd</h3>
        <div className='card' style={{ width: 'fit-content', backgroundColor: 'white', padding: '10px', marginBottom: '0'}}>
            <h5>Restauracja Plus Usługi Hotelarskie "Zajazd Broadway"</h5>
            <p style={{ marginBottom: '0' }}>12 sie. - 4. sie. • <span style={{ color: '#00b33c'}}>Potwierdzono</span></p>
        </div>
        <h2 style={{ marginTop: '25px'}}>Popularne cele podróży</h2>
            <div style={{ display: 'flex', justifyContent: 'start', gap: '25px' }}>
                <div className='card' style={{ cursor: 'pointer', width: '70%', border: '0', height: '150px', backgroundImage: 'url("warszawa2.jpg")', backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                    <div style={{clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: '#99ddff', padding: '0', width: '34px', height: '34px', fontSize: '30px', top: '8px', left: '8px'}}></div><div style={{ clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: 'white', padding: '0', width: '30px', height: '30px', fontSize: '20px', top: '10px', left: '10px', textAlign: 'center', verticalAlign: 'center', color: '#9c7200' }}>1</div>
                    <div style={{ width: '95%', margin: '0 auto', position: 'absolute', bottom: '15px', right: '15px', color: '#99ddff',  fontWeight: '700', paddingRight: '10px', paddingLeft: '10px', fontSize: '35px', textAlign: 'right', textShadow: 'rgb(0 0 0) 3px 0px 7px, rgb(0 0 0) -3px 0px 7px, rgb(0 0 0) 0px 4px 7px' }}>                        Warszawa
                        </div>
                </div>
                <div className='card' style={{ cursor: 'pointer', width: '30%', border: '0', height: '150px', backgroundImage: 'url("poznan.jpg")', backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                <div style={{clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: '#99ddff', padding: '0', width: '34px', height: '34px', fontSize: '30px', top: '8px', left: '8px'}}></div><div style={{ clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: 'white', padding: '0', width: '30px', height: '30px', fontSize: '20px', top: '10px', left: '10px', textAlign: 'center', verticalAlign: 'center', color: '#9c7200' }}>2</div>
                <div style={{ width: '95%', margin: '0 auto', position: 'absolute', bottom: '15px', right: '15px', color: '#99ddff',  fontWeight: '700', paddingRight: '10px', paddingLeft: '10px', fontSize: '35px', textAlign: 'right', textShadow: 'rgb(0 0 0) 3px 0px 7px, rgb(0 0 0) -3px 0px 7px, rgb(0 0 0) 0px 4px 7px' }}>                        Poznań
                    </div>
                    </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'start', gap: '25px', marginTop: '25px' }}>
                <div className='card' style={{ cursor: 'pointer', width: '33%', border: '0', height: '150px', backgroundImage: 'url("swinoujscie.jpg")', backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                    <div style={{clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: '#99ddff', padding: '0', width: '34px', height: '34px', fontSize: '30px', top: '8px', left: '8px'}}></div><div style={{ clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: 'white', padding: '0', width: '30px', height: '30px', fontSize: '20px', top: '10px', left: '10px', textAlign: 'center', verticalAlign: 'center', color: '#9c7200' }}>3</div>
                    <div style={{ width: '95%', margin: '0 auto', position: 'absolute', bottom: '15px', right: '15px', color: '#99ddff',  fontWeight: '700', paddingRight: '10px', paddingLeft: '10px', fontSize: '35px', textAlign: 'right', textShadow: 'rgb(0 0 0) 3px 0px 7px, rgb(0 0 0) -3px 0px 7px, rgb(0 0 0) 0px 4px 7px' }}>                        Świnoujście
                    </div>
                </div>
                <div className='card' style={{ cursor: 'pointer', width: '33%', border: '0', height: '150px', backgroundImage: 'url("miedzyzdroje.jpg")', backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                    <div style={{clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: '#99ddff', padding: '0', width: '34px', height: '34px', fontSize: '30px', top: '8px', left: '8px'}}></div><div style={{ clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: 'white', padding: '0', width: '30px', height: '30px', fontSize: '20px', top: '10px', left: '10px', textAlign: 'center', verticalAlign: 'center', color: '#9c7200' }}>4</div>
                    <div style={{ width: '95%', margin: '0 auto', position: 'absolute', bottom: '15px', right: '15px', color: '#99ddff',  fontWeight: '700', paddingRight: '10px', paddingLeft: '10px', fontSize: '35px', textAlign: 'right', textShadow: 'rgb(0 0 0) 3px 0px 7px, rgb(0 0 0) -3px 0px 7px, rgb(0 0 0) 0px 4px 7px' }}>
                        Międzyzdroje
                    </div>
                </div>
                <div className='card' style={{ cursor: 'pointer', width: '33%', border: '0', height: '150px', backgroundImage: 'url("kamienpomorski.jpg")', backgroundSize: '100% 150%', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                    <div style={{clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: '#99ddff', padding: '0', width: '34px', height: '34px', fontSize: '30px', top: '8px', left: '8px'}}></div><div style={{ clipPath: 'circle(50% at 50% 50%)', position: 'absolute', backgroundColor: 'white', padding: '0', width: '30px', height: '30px', fontSize: '20px', top: '10px', left: '10px', textAlign: 'center', verticalAlign: 'center', color: '#9c7200' }}>5</div>
                    <div style={{ width: '95%', margin: '0 auto', position: 'absolute', bottom: '15px', right: '15px', color: '#99ddff',  fontWeight: '700', paddingRight: '10px', paddingLeft: '10px', fontSize: '35px', textAlign: 'right', textShadow: 'rgb(0 0 0) 3px 0px 7px, rgb(0 0 0) -3px 0px 7px, rgb(0 0 0) 0px 4px 7px' }}>
                        Kamień Pomorski
                    </div>
                </div>
            </div>
            <h2 style={{ marginTop: '25px'}}>Poszukaj inspiracji na kolejną podróż</h2>
            
        </div>
    );
    }
export default Home;
