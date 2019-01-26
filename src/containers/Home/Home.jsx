import React from 'react';
import './Home.css';
import idea from '../../assets/images/opensource.svg';
import chart from '../../assets/images/top-charts.svg';
import group from '../../assets/images/DeveloperClub.svg';
import conference from '../../assets/images/conferences.svg';
import code from '../../assets/images/code.svg';
import laptop from '../../assets/images/jobs.png';
import event from '../../assets/images/event.svg';
import classroom from '../../assets/images/studentbenefits.svg';
import Cards from '../../components/Cards/Cards';
import Loader from '../../components/Loader/Loader';

export default class Home extends React.Component {

    state = {
        cards: [
            {
                title: "New Arrival",
                link: "/latest",
                png: chart,
                color: "#dd2727b6"
            },
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
                color: "#e7559ef1"
            },
            {
                title: "Student Benefit & Fellowship Programs",
                link: "/student-benefits",
                png: classroom,
                color: "#f99931"
            },
            {
                title: "Developer clubs & Meetups",
                link: "/meetups",
                png: group,
                color: "#257281"
            },
            {
                title: "Placement Stories",
                link: "/campus-placement",
                png: laptop,
                color: "#45bd59"
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