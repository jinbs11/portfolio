import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="bg-surface text-text px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-accent">Portfolio</h1>
        <nav className="space-x-4">
            <a href="#home" className="hover:text-accent">Home</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#contact" className="hover:text-accent">Contacts</a>
        </nav>
    </header>
  );
};

export default Topbar;
