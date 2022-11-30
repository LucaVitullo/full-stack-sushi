import './App.css';
import React from 'react';
import Navbar from './Components/navbar';
import Card from './Components/card';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Cosa desideri odrinare?</h1>
        <hr />
        <div className='row'>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
