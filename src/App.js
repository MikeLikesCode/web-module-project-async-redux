import React from 'react';
import './styles.css';
import Axolotl from './components/Axolotl';

function App() {
  return (
    <div style={{padding: '25px', color:'white'}} className="App">
     <h1>Get a Axolotl and a fun fact!</h1>
     <Axolotl/>
    </div>
  );
}

export default App;
