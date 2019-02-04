import React from 'react';
import './NewArrival.css';
import ConferencesCard from '../../components/ConferencesCard/ConferencesCard';
import NewArrivalCard from '../../components/NewArrival/NewArrivalCard';
import Loader from '../../components/Loader/Loader';

export default class NewArrival extends React.Component {

    state = {
        loading: true,
        conferences: [],
        meetups: [],
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const conferences = fetch("https://api.frontbench.xyz/conferences");
        const meetups = fetch("https://api.frontbench.xyz/meetups");

        Promise
            .all([conferences, meetups])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    conferences: responses[0],
                    meetups: responses[1]
                })
            });
        window.scrollTo(0, 0);
    }

    render() {

        const conferences = <div id="conferences">
            <h1>Conferences</h1>
          
            {this.state.conferences.map((conf, i) => (
                <ConferencesCard
                    key={i}
                    title={conf.title}
                    link={conf.url}
                    place={conf.place}
                    date={conf.deadline}
                    type={conf.type}
                    coverage={conf.ta} />
            ))}
        </div>

        const meetups = <div id="meetups">
            <h1>Explore Latest Opportunities</h1>
           
            {this.state.meetups.map((el, i) => {
                return (
                    <NewArrivalCard key={i} title={el.title} link={el.url} area={el.location} />
                );
            })}
        </div>

        let view = null;

        if (this.props.page === "1") {
            view = <div className="events-page-container">
                {conferences}
            </div>
        }

        if (this.props.page === "2") {
            view = <div className="events-page-container">
                {meetups}
            </div>
        }

        return (
            <>
                {this.state.loading ? <Loader /> : null}
                {view}
            </>
        );
    }
}