import React from 'react';
import './Home.css';
import idea from '../../assets/images/idea.png';
import chart from '../../assets/images/chart.png';
import group from '../../assets/images/group.png';
import conference from '../../assets/images/conference.png';
import code from '../../assets/images/code.png';
import laptop from '../../assets/images/laptop.png';
import event from '../../assets/images/event.png';
import classroom from '../../assets/images/classroom.png';
import Cards from '../../components/Cards/Cards';

export default class Home extends React.Component {

    state = {
        cards: [
            {
                title:"Coding Resources",
                link: "/home/coding-resources",
                png: code,
                color: "#99cffe"
            },
            {
                title:"Hackathons & Events",
                link: "/home/hackathons",
                png: event,
                color: "#49dbbd"
            },
            {
                title:"Student Benefits",
                link: "/home/student-benefits",
                png: classroom,
                color: "#dbc224"
            },
            {
                title:"Open Source Programs",
                link: "/home/open-source", 
                png: idea,
                color: "#f67676"
            },
            {
                title:"Startup Programs & Incubators",
                link: "/home/startup-programs",
                png: laptop,
                color: "#6fbb2d"
            },
            {
                title:"Developer clubs & Meetups",
                link: "/home/meetups",
                png: group,
                color: "#257281"
            },
            {
                title:"Conferences",
                link: "/home/conferences",
                png: conference,
                color: "#8465ac"
            },
            {
                title:"Top Charts",
                link: "/home/top-charts",
                png: chart,
                color: "#595a5b"
            },
        ]
    }

    render() {
        return (
            <div id="home-page-container">
                <h1 className="heading">Explore the ultimate collection</h1>
                <p className="sub-heading">What's on your mind today? Want to do self-study? Explore new peers?</p>
                <Cards cards={this.state.cards} />
            </div>
        );
    }
}