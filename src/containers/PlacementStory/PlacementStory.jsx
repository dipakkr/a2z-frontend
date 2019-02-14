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
                color: "#a05121f0"
            },
            {
                title: "Congnizant",
                link: "/campus-placement/cognizant",
                png: laptop,
                color: "#467c00"
            },
            {
                title: "Capgemini",
                link: "/campus-placement/capgemini",
                png: laptop,
                color: "#726a00"
            },
            {
                title: "Yodlee",
                link: "/campus-placement/yodlee",
                png: laptop,
                color: "#36b793"
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
                <div id="placement-page-container">
                    <h1 className="placement-heading">Placement Stories</h1>
                    <Cards cards={this.state.cards} />
                </div>
            </>
        );
    }
}