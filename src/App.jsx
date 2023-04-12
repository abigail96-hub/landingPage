import React, { useState } from 'react';
import primerad from './assets/primerad.png';
import tu2 from './assets/yo.png';
import img3 from './assets/img3.png'
import boletos from './assets/boletos.png'
import tercera from './assets/tercera.png'
import cuatro from './assets/cuatro.png'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
       
       {/* <p className='texto'>
        EN MONTERRY NOS PINTAMOS DE VERDE 
        </p>  */}
       
        
      </header>
      <div class="contenedor">
      <main className="App-main">
          
       
           <img src={primerad} className="avion" alt="avion" />
           <img src={tu2} className="avion" alt="avion" />                                                                                                                                                                                                                                                                                            
         <img src={img3} className="avion" alt="avion" /> 
         <img src={boletos} className="avion" alt="avion" /> 
         <img src={tercera} className="avion" alt="avion" /> 
         <img src={cuatro} className="avion" alt="avion" /> 

        {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
       
        {/* <img src={valon} className="portada" alt="avion" /> */}
      </main>
      <footer className="App-footer">
     
        <p>
       
      
          .
        </p>
      </footer>
      </div>
    </div>
  );
}

export default App;
