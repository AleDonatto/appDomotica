import React from 'react'
import './App.css';
import { ProviderContext } from './hooks/ProviderContext';
import { Routes } from './routes/Routes';

function App() {

  return (
    <div className="">
      <ProviderContext >
          <Routes />
      </ProviderContext>
    </div>
  );
}

export default App;
