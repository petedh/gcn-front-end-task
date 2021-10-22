import React from 'react';
import { useState } from 'react';
import Body from './assets/img/body.png';
import { Menu } from './components/Menu';
import Header from './assets/img/header.png';
import './App.css';

export function App() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const notActive = () => {
    setActive(false);
  };

  const props = { active, toggleActive };
  return (
    <div className="App">
      <header className="App-header" onClick={notActive}>
        <img src={Header} className="header" alt="header" />
      </header>
      <Menu {...props} />
      <main className="App-header" onClick={notActive}>
        <img src={Body} className="body" alt="body" />
      </main>
    </div>
  );
}
