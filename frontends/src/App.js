import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUserName(response.data);
  };

  return (
    <div>
      <h1>My Frontend</h1>
      <h1>My name is {userName}</h1>
    </div>
  );
}

export default App;
