import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <div className="App">
          <Layout>
            <Route path="/" exact component={Home} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
