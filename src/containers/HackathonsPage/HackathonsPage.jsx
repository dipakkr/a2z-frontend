import React from 'react';
import './HackathonsPage.css';
import Tags from '../../components/Tags/Tags';
import Loader from '../../components/Loader/Loader';
import HackathonsCard from '../../components/HackathonsCard/HackathonsCard';

export default class HackathonsPage extends React.Component {
    
    state = {
        loading: true,
        hackathonsInit: [],
        hackathons: [],
        majorTags: [],
        selectedTags: [],
        mappedTags: {},
        colors: ["#dbc224", "#8465ac", "#06addb", "#49dbbd", "#f67676", "#6fbb2d", "#257281", "#595a5b"]
    }

    separateDetails = (res) => {
        for(let hack of res) {
            hack.details = [];
            //date
            hack.details.push(hack["date"]);

            //place
            hack.details.push("Place: " + hack["place"]);

            //type
            hack.details.push("Type: "+ hack["type"]);

            //ta
            hack.details.push("TA: " + hack["ta"]);
            
        }
        return res;
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/ebu3e')
            .then(res => res.json())
            .then(res => {
                //add tags
                let majorTags = [];
                for(let i in res) {
                    let place = res[i]["place"];
                    if(!majorTags.includes(place)) {
                        majorTags.push(place);
                    }
                    res[i].tags = [place];
                }
                
                //add colors
                let mappedTags = {}
                for(let tag of majorTags) {
                    mappedTags[tag] = this.state.colors[Math.round((Math.random()*(this.state.colors.length-1)))];
                }

                //separate details
                res = this.separateDetails(res);

                //save data
                this.setState({
                    loading: false,
                    hackathonsInit: res,
                    hackathons: res,
                    majorTags,
                    mappedTags,
                })
            });
        window.scrollTo(0, 0);
    }

    updateCards = () => {
        const hackathons = this.state.hackathonsInit;
        const tags = this.state.selectedTags;

        if(tags.length === 0) {
            this.setState({
                hackathons
            })
        } else {
            const newHackathons = hackathons.filter(res => {
                for(let tag of res.tags) {
                    if(tags.includes(tag)) {
                        return true
                    }
                }
                return false
            })

            this.setState({
                hackathons: newHackathons
            })
        }
    }

    handleTags = (e) => {
        const currentTags = this.state.selectedTags;
        const tag = e.target.dataset.value;
        if(currentTags.includes(tag)) {
            const tagIndex = currentTags.indexOf(tag);
            const newTags = [
                ...currentTags.slice(0, tagIndex),
                ...currentTags.slice(tagIndex + 1)
            ];
            this.setState({
                selectedTags: newTags
            }, this.updateCards)
        } else {
            currentTags.push(tag);
            this.setState({
                selectedTags: currentTags
            }, this.updateCards)
        }
    }

    render() {
        const loader = this.state.loading ? <Loader /> : null;
        return (
            <>
                {loader}
                <div className="hackathons-page-container">
                    <h1>Hackthons</h1>
                    <div className="hackathons-page-tags">
                        {this.state.majorTags.map(tag => (
                            <Tags
                                key={tag}
                                text={tag}
                                isClicked={this.state.selectedTags.includes(tag)}
                                clickable={true}
                                clicked={this.handleTags}
                                background={this.state.mappedTags[tag]} />
                        ))}
                    </div>
                    <div className="hackathons-cards-container">
                        {this.state.hackathons.map((hack, i) => {
                            return (
                                <HackathonsCard
                                    key={i}
                                    title={hack.title}
                                    url={hack.url}
                                    details={hack.details}
                                    tags={hack.tags}
                                    mappedTags={this.state.mappedTags} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}