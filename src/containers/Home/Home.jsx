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
import Loader from '../../components/Loader/Loader';

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
                title: "Hackathons & Competitions",
                link: "/hackathons",
                png: event,
                color: "#f67676"
            },
            {
                title: "Conferences",
                link: "/conferences",
                png: conference,
                color: "#8465ac"
            },
            {
                title: "Open Source Programs",
                link: "/open-source",
                png: idea,
                color: "#49dbbd"
            },
            {
                title: "Student Benefit & Fellowship Programs",
                link: "/student-benefits",
                png: classroom,
                color: "#f99931"
            },
            {
                title: "Startup Programs & Incubators",
                link: "/startup-programs",
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
                title: "Top Charts",
                link: "/top-charts",
                png: chart,
                color: "#595a5b"
            },
        ],
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <>
                {this.state.loading ? <Loader message=" " /> : null}
                <div id="home-page-container">
                    <h1 className="heading">Explore the ultimate collection</h1>
                    <p className="sub-heading">What's on your mind today? Want to do self-study? Explore new peers?</p>
                    <Cards cards={this.state.cards} />
                </div>
            </>
        );
    }
}