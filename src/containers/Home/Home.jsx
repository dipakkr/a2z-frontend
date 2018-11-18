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
                title: "Coding Resources",
                link: "/coding-resources",
                png: code,
                color: "#06addb"
            },
            {
                title: "Hackathons & Events",
                link: "/hackathons",
                png: event,
                color: "#f67676"
            },
            {
                title: "Student Benefits",
                link: "/programs",
                png: classroom,
                color: "#ffc600"
            },
            {
                title: "Open Source Programs",
                link: "/programs",
                png: idea,
                color: "#49dbbd"
            },
            {
                title: "Startup Programs & Incubators",
                link: "/programs",
                png: laptop,
                color: "#6fbb2d"
            },
            {
                title: "Developer clubs & Meetups",
                link: "/meetups",
                png: group,
                color: "#257281"
            },
            {
                title: "Conferences",
                link: "/conferences",
                png: conference,
                color: "#8465ac"
            },
            {
                title: "Top Charts",
                link: "/top-charts",
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