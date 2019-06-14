import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, Customtable as Table } from './components';
import { Button } from 'reactstrap';
import { Overlay, AboutUs } from './page';
import { ToastContainer } from 'react-toastify';

import './App.scss';

function Page() {
  return (
    <div className="App">
      <ToastContainer />
      <Header items={navItems}><Overlay /></Header>
      <AboutUs />
      <Footer />
    </div>
  );
}

class TablePage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    };
  }
  async componentDidMount() {
    this.setState({ list: await requestInscriptions() });
  }

  render() {
    return (
      <>
      <Table 
        inscriptions={this.state.list}
      />
      <Button onClick={() => this.props.history.push("/pethealth")} color="primary">Regresa al landing page</Button>
      </>
    );
  }
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/inscriptions" render={(props) => <TablePage {...props} />} />
        <Route path="/" render={(props) => <Page />} />
        {/* <Route render={() => <h1>PAGINA NO ENCONTRADA</h1>} /> */}
      </Switch>
    </Router>
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

const inscriptionsUrl = "https://pethealh-backend.herokuapp.com/api/register?clean=false";

async function requestInscriptions() {
  try {
    const response = await fetch(inscriptionsUrl);
    const inscriptions = await response.json();
    return inscriptions.registrations;
  } catch (error) {
    console.error(error);
    return [];
  }
}