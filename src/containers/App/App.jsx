import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Home from '../Home/Home';
import { Provider } from '../../components/Context/Context';

class App extends Component {

  state = {
    navIsOpen: false,
    navLinks: [
      ["Login", "/login"],
      ["SignUp", "/signup"],
      ["Roadmaps", "/roadmaps"],
      ["Explorer", "/explorer"],
    ]
  }

  navHandler = () => {
    let current = this.state.navIsOpen;
    this.setState({
      navIsOpen: !current
    });
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>  
        <div className="App">
          <Provider value={{
            navIsOpen: this.state.navIsOpen,
            navLinks: this.state.navLinks, 
            navHandler: this.navHandler
            }}>
            <Layout>
              <Route path="/" exact component={Home} />
            </Layout>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
