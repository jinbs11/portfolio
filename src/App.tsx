import React from 'react';
import './index.css';
import Topbar from './components/TopBar';
import Header from './components/Header';

function App() {

  return (
    <div className="App bg-background text-text min-h-screen">
      <Topbar />
      <Header />
    </div>
  );
}

export default App;
