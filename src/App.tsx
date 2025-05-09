import React from 'react';
import './index.css';
import Topbar from './components/TopBar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {

  return (
    <div className="App bg-background text-text min-h-screen scroll-smooth select-none">
      <Topbar />
      <Header />
      <div id='projects' className='mt-24'>
        <h1 className='px-12 text-6xl font-bold mb-5'>Projects</h1>
        <Projects />
      </div>
      <div id='contact' className='mt-24'>
        <h1 className='px-12 text-6xl font-bold mb-5'>Contacts</h1>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
