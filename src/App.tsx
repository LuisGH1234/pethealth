import React, { useState } from 'react';
import { Header } from './components';
import { Overlay } from './page';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  // const [time, setTime] = useState(new Date());
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {e.preventDefault(); setTime(new Date())}}
        >
          Learn React
        </a>
      </header>
      {time.toString()} */}
      <Header items={navItems}><Overlay /></Header>
      <div><h1>PET</h1></div>
    </div>
  );
}

//#region misc
const navItems = [
  {
    label: 'Home',
    path: '#header',
  },
  {
    label: 'Nosotros',
    path: '#',
  },
  {
    label: 'Github',
    path: 'https://github.com/LuisGH1234/peth-health',
  },
];
//#endregion

export default App;
