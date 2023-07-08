import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Registration from './views/Registration';
import List from './views/List';

function App() {
 
  return (
    <div className="App">
      <Registration/>
      
      <List/>
    </div>
  );
}

export default App;
