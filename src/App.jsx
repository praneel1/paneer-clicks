import React from 'react';
import './App.css';
import Photogrid2 from './components/Photogrid2';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4 text-center">
        <h1 className="text-4xl font-bold">Capturing the Unnoticed</h1>
      </header>

      <Photogrid2/>

      {/* <footer className="bg-gray-900 text-white p-4 text-center">
        <p>© {new Date().getFullYear()} Praneel. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default App;
