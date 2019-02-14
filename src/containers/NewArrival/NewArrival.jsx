import React from 'react';
import './NewArrival.css';
import NewArrivalCard from '../../components/NewArrival/NewArrivalCard';
import Loader from '../../components/Loader/Loader';

export default class NewArrival extends React.Component {

    state = {
        loading: true,
        conferences: [],
        newArrivals: [],
    }
        componentDidMount() {
        window.scrollTo(0, 0);
        const conferences = fetch("https://api.frontbench.xyz/conferences");
        const newArrivals = fetch("https://api.frontbench.xyz/latest");

        Promise
            .all([conferences, newArrivals])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    conferences: responses[0],
                    newArrivals: responses[1]
                })
            });
        window.scrollTo(0, 0);
    }

    render() {

        const newArrivals = <div id="new-arrival">
            {this.state.newArrivals.map((el, i) => {
                return (
                    <NewArrivalCard 
                        key={i} 
                        title={el.title} 
                        link={el.url} 
                        type={el.type} 
                        place={el.place}
                        date={el.date}
                        review={el.review}
                        scholarship={el.scholarship}
                    />
                );
            })}
        </div>

        let view = null;

        if (this.props.page === "2") {
            view = <div className="newarrival-container">
                {newArrivals}
            </div>
        }

        return (
            <>
                {this.state.loading ? <Loader /> : null}
                <h1 className="section-heading">Latest Opportunities</h1>
                {view}
            </>
        );
    }
}