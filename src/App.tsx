import React from 'react';
import { Header, Footer } from './components';
import { Overlay, AboutUs } from './page';
import { ToastContainer } from 'react-toastify';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header items={navItems}><Overlay /></Header>
      <AboutUs />
      <Footer />
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
    path: '#aboutus',
  },
  {
    label: 'Github',
    path: 'https://github.com/LuisGH1234/pethealth',
  },
];
//#endregion

export default App;
