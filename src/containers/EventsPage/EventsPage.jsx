import React from 'react';
import './EventsPage.css';
import ConferencesCard from '../../components/ConferencesCard/ConferencesCard';
import Meetups from '../../components/Meetups/Meetups';
import Loader from '../../components/Loader/Loader';

export default class EventsPage extends React.Component {

    state = {
        loading: true,
        conferences: [],
        meetups: [],
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const conferences = fetch("https://api.myjson.com/bins/i393e");
        const meetups = fetch("https://api.myjson.com/bins/flg2i");

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
            })
    }

    render() {

        const conferences = <div id="conferences">
            <h1>Conferences</h1>
            <hr />
            {this.state.conferences.map((conf, i) => (
                <ConferencesCard
                    key={i}
                    title={conf.title}
                    link={conf.link}
                    place={conf.place}
                    date={conf.deadline}
                    type={conf.type}
                    coverage={conf.ti} />
            ))}
        </div>

        const meetups = <div id="meetups">
            <h1>Developer Clubs and Meetups</h1>
            <hr />
            {this.state.meetups.map((el, i) => {
                return (
                    <Meetups key={i} title={el.title} link={el.url} area={el.location} />
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