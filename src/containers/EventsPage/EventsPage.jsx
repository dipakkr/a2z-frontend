import React from 'react';
import './EventsPage.css';
import ConferencesCard from '../../components/ConferencesCard/ConferencesCard';
import Loader from '../../components/Loader/Loader';

export default class EventsPage extends React.Component {

    state = {
        loading: true,
        conferences: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const conferences = fetch("https://api.myjson.com/bins/dlbgq");

        Promise
            .all([conferences])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    conferences: responses[0]
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
                    date={conf.date}
                    deadline={conf.deadline}
                    type={conf.type}
                    coverage={conf.ti} />
            ))}
        </div>

        let view = null;

        if (this.props.page === "1") {
            view = <div className="events-page-container">
                {conferences}
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