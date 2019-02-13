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
import ProgramsPage from '../ProgramsPage/ProgramsPage';
import TopCharts from '../TopCharts/TopCharts';
import Dashboard from '../Dashboard/Dashboard';
import EventsPage from '../EventsPage/EventsPage';
import BlogList from '../BlogList/BlogList';
import About from '../../components/About/About';
// import ContactUs from '../../components/ContactUs/ContactUs';
import CampusStar from '../../components/CampusStar/CampusStar';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import Team from '../../components/Team/Team';
import PlacementStory from '../PlacementStory/PlacementStory';
import NewArrival from '../NewArrival/NewArrival';
import BlogArticle from '../../containers/BlogArticle/BlogArticle';
import CompanyWiseList from '../../containers/CampusPlacementList/CompanyWiseList';

class App extends Component {

  state = {
    pages: [
      ["Coding Resources", "/coding-resources",],
      ["Hackathons & Competitions", "/hackathons",],
      ["Open Source Programs", "/open-source",],
      // ["Startup Programs", "/startup-programs",],
      ["Campus Placement", "/campus-placement",],
      ["Student Benefits", "/student-benefits",],
      ["Conferences", "/conferences",],
      ["Meetups", "/meetups",],
      ["Top Charts", "/top-charts",],
    ],
    isLanding: false,
    navIsOpen: false,
    navLinks: [
      ["Home", "/home"],
      ["Blog", "/blog"],
      // ["Roadmaps", "/roadmaps"],
      ["Connect With Us", "/contact"],
      ["Campus Connect", "/campus-connect"],
      ["About Us", "/about"],
      ["Team", "/team"]
     
      // ["SignUp", "/signup"],
      // ["Login", "/login"],
    ],
    isVerified: false,
    loginModal: false,
    signupModal: false,
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

  toggleModals = (e, name) => {
    e.preventDefault();
    if (name === "Login") {
      let current = this.state.loginModal;
      this.setState({
        loginModal: !current
      })
    }
    if (name === "SignUp") {
      let current = this.state.signupModal;
      this.setState({
        signupModal: !current
      })
    }
  }

  loginHandler = (e) => {
    this.setState({
      isVerified: true,
      navLinks: [
        ["Home", "/home"],
        ["Roadmaps", "/roadmaps"],
        ["Dashboard", "/dashboard"]
      ]
    })
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Provider value={{
            pages: this.state.pages,
            isLanding: this.state.isLanding,
            navIsOpen: this.state.navIsOpen,
            navLinks: this.state.navLinks,
            navHandler: this.navHandler,
            toggleModals: this.toggleModals,
            loginHandler: this.loginHandler,
            loginModal: this.state.loginModal,
            signupModal: this.state.signupModal,
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
                <Route path="/hackathons" exact render={() => (
                  <HackathonsPage title="Hackathons" color="#06addb" />
                )} />
                <Route path="/student-benefits" exact render={() => (
                  <ProgramsPage page="1" />
                )} />
                <Route path="/open-source" exact render={() => (
                  <ProgramsPage page="2" />
                )} />
                <Route path="/startup-programs" exact render={() => (
                  <ProgramsPage page="3" />
                )} />
                <Route path="/conferences" exact render={() => (
                  <EventsPage page="1" />
                )} />
                <Route path="/meetups" exact render={() => (
                  <EventsPage page="2" />
                )} />
                <Route path="/latest" exact render={() => (
                  <NewArrival page="2" />
                )} />
                <Route path="/roadmaps" exact render={() => (
                  <TopCharts />
                )} />
                <Route path="/about" exact render={() => (
                  <About />
                )} />
                <Route path="/contact" exact render={() => (
                  <SubscriptionForm />
                )} />
                <Route path="/campus-connect" exact render={() => (
                  <CampusStar />
                )} />
                <Route path="/blog" exact render={() => (
                  <BlogList />
                )} />
                <Route path="/team" exact component={Team}/>
                
                <Route path="/campus-placement" exact component={PlacementStory} />

                <Route path="/campus-placement/:slug" exact component={CompanyWiseList} />

                <Route path="/campus-placement/:slug/:slug" exact component={BlogArticle} />

                <Route path="/top-charts" exact component={TopCharts} />
                 
		      		  <Route path="/blog/:slug" exact component={BlogArticle}/>
                <Route path="/dashboard" exact render={() => {
                  if (this.state.isVerified) {
                    return <Dashboard />;
                  } else {
                    alert("You need to login")
                    return <Redirect to="/home" />
                  }
                }} />
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