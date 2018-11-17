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

    findMonth = (num) => {
        switch(num) {
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08":
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
            default:
                return "";
        }
    }

    makeDate = (date) => {
        date = date.split('-')
        let newDate = "";
        if(date.length === 2) {
            newDate = this.findMonth(date[1]) + ", " + date[0];
        } else if(date.length === 3) {
            newDate = this.findMonth(date[1]) + " " + date[2] + ", " + date[0];
        }
        return newDate;
    }

    separateDetails = (res) => {
        for(let hack of res) {
            hack.details = [];
            //date
            if(hack["event"] !== "Ended" && hack["event"] !== "TBD") {
                hack.details.push(this.makeDate(hack["event"]));
            } else {
                hack.details.push(hack["event"]);
            }

            //place
            hack.details.push("Place:" + ((hack["specifics"]) ? " " + hack["specifics"] + ", " : " ") + hack["place"]);

            //application
            if(hack["application"]) {
                hack.details.push("Application Date: "+ this.makeDate(hack["application"]));
            }
            
        }
        return res;
    }

    isHappeningSoon = (date) => {
        if(date === "Ended" || date === "TBD") return false;
        const currentDate = new Date();
        const [month, year] = [currentDate.getMonth(), currentDate.getFullYear()];
        date = date.split('-');
        if(date.length === 2
            && (parseInt(date[0]) - year) === 0
            && (parseInt(date[1]) - (month + 1)) === 0) {
            return true;
        } else if(date.length === 3
                    && (parseInt(date[0]) - year) === 0
                    && (parseInt(date[1]) - (month + 1)) <= 1) {
            return true;    
        }
        return false;
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1hag5i')
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
                majorTags.push("Happening Soon");
                
                //add colors
                let mappedTags = {}
                for(let tag of majorTags) {
                    mappedTags[tag] = this.state.colors[Math.round((Math.random()*(this.state.colors.length-1)))];
                }

                //separate details
                res = this.separateDetails(res);

                //isHappeningSoonTag
                for(let i in res) {
                    if(this.isHappeningSoon(res[i]["event"])) {
                        res[i].tags.push("Happening Soon");    
                    }
                }

                //save data
                this.setState({
                    loading: false,
                    hackathonsInit: res,
                    hackathons: res,
                    majorTags,
                    mappedTags,
                })
            })
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
                    <div>
                        {this.state.hackathons.map((hack, i) => {
                            return (
                                <HackathonsCard
                                    key={i}
                                    title={hack.name}
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