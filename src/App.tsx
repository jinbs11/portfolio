import React from 'react';
import './index.css';
import Topbar from './components/TopBar';

function App() {
  return (
    <div className="App bg-background text-text min-h-screen">
      <Topbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold">Tervetuloa!</h2>
        <p>Tämä on tumma tausta testissä.</p>
      </div>
    </div>
  );
}

export default App;
