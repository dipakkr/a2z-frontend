import React from 'react';
import './PlacementStory.css';
import laptop from '../../assets/images/jobs.png';
import Cards from '../../components/Cards/Cards';
import Loader from '../../components/Loader/Loader';

export default class PlacementStory extends React.Component {

    state = {
        cards: [
            {
                title: "TCS",
                link: "/tcs",
                png: laptop,
                color: "#dd2727b6"
            },
            {
                title: "Infosys",
                link: "/infosys",
                png: laptop,
                color: "#06addb"
            },
            {
                title: "Wipro",
                link: "/wipro",
                png: laptop,
                color: "#f67676"
            },
            {
                title: "Accenture",
                link: "/accenture",
                png: laptop,
                color: "#8465ac"
            },
            {
                title: "Amazon",
                link: "/amazon",
                png: laptop,
                color: "#e7559ef1"
            },
            {
                title: "HSBC",
                link: "/student-benefits",
                png: laptop,
                color: "#f99931"
            },
            {
                title: "Paytm",
                link: "/meetups",
                png: laptop,
                color: "#257281"
            },
            {
                title: "Cognizant",
                link: "/cognizant",
                png: laptop,
                color: "#45bd59"
            },
            {
                title: "TCS",
                link: "/tcs",
                png: laptop,
                color: "#dd2727"
            },
            {
                title: "Infosys",
                link: "/infosys",
                png: laptop,
                color: "#045131"
            },
            {
                title: "Wipro",
                link: "/wipro",
                png: laptop,
                color: "#f67612"
            },
            {
                title: "Accenture",
                link: "/accenture",
                png: laptop,
                color: "#846521"
            },
            {
                title: "Amazon",
                link: "/amazon",
                png: laptop,
                color: "#122432"
            },
            {
                title: "HSBC",
                link: "/student-benefits",
                png: laptop,
                color: "#987123"
            },
            {
                title: "Paytm",
                link: "/meetups",
                png: laptop,
                color: "#124789"
            },
            {
                title: "Cognizant",
                link: "/cognizant",
                png: laptop,
                color: "#761234"
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
                    <h1 className="heading">Placement Stories</h1>
                    <Cards cards={this.state.cards} />
                </div>
            </>
        );
    }
}