import React from 'react';
import './PlacementStory.css';
import laptop from '../../assets/images/jobs.png';
import Cards from '../../components/Cards/Cards';
import Loader from '../../components/Loader/Loader';

export default class PlacementStory extends React.Component {

    state = {
        cards: [
            {
                title: "Infosys",
                link: "/campus-placement/infosys",
                png: laptop,
                color: "#06addb"
            },
            {
                title: "TCS",
                link: "/campus-placement/tcs",
                png: laptop,
                color: "#dd2727b6"
            },
            {
                title: "Wipro",
                link: "/campus-placement/wipro",
                png: laptop,
                color: "#f67676"
            },
            {
                title: "Congnizant",
                link: "/campus-placement/cognizant",
                png: laptop,
                color: "#f67676"
            },
            {
                title: "Capgemini",
                link: "/campus-placement/capgemini",
                png: laptop,
                color: "#f67676"
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