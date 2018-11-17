import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Home from '../Home/Home';
import Landing from '../../components/Landing/Landing';
import { Provider } from '../../components/Context/Context';
import ResourcesPage from '../ResourcesPage/ResourcesPage';
import Lost from '../../components/Lost/Lost';
import HackathonsPage from '../HackathonsPage/HackathonsPage';

class App extends Component {

  state = {
    isLanding: false,
    navIsOpen: false,
    navLinks: [
      ["Login", "/login"],
      ["SignUp", "/signup"],
      ["Roadmaps", "/roadmaps"],
      ["Explorer", "/explorer"],
    ],
  }

  navHandler = () => {
    let current = this.state.navIsOpen;
    this.setState({
      navIsOpen: !current
    });
  }

  toggleLanding = () => {
    let current = this.state.isLanding;
    this.setState({
      isLanding: !current
    });
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>  
        <div className="App">
          <Provider value={{
            isLanding: this.state.isLanding,
            navIsOpen: this.state.navIsOpen,
            navLinks: this.state.navLinks, 
            navHandler: this.navHandler,
            }}>
            {/* <Loader /> */}
            <Layout>
               <Switch> 
                <Route path="/" exact render={() => (
                  <Landing toggleLanding={this.toggleLanding} />
                )} />
                <Route path="/home" exact component={Home} />
                <Route path="/coding-resources" render={() => (
                  <ResourcesPage title="Coding Resources" color="#06addb" />
                )} />
                <Route path="/hackathons" render={() => (
                  <HackathonsPage title="Coding Resources" color="#06addb" />
                )} />
                <Route path="/lost" component={Lost} />
                <Redirect to="/lost" />
              </Switch>
            </Layout>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
