import React from 'react';
import Body from './assets/img/body.png';
import { Menu } from './components/Menu';
import Header from './assets/img/header.png';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Header} className="header" alt="header" />
      </header>
      <Menu />
      <main className="App-header">
        <img src={Body} className="body" alt="body" />
      </main>
    </div>
  );
}
