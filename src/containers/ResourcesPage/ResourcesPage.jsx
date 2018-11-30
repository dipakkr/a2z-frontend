import React from 'react';
import './ResourcesPage.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import ResourceCardExpanded from '../../components/ResourceCardExpanded/ResourceCardExpanded';
import { Route, Switch } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';
import Loader from '../../components/Loader/Loader';

class ResourcesPage extends React.Component {

    state = {
        loading: true,
        resourcesInit: [],
        resources: [],
        majorTags: [],
        mappedTags: {},
        selectedTags: [],
        colors: ["#dbc224", "#8465ac", "#06addb", "#49dbbd", "#f67676", "#6fbb2d", "#257281", "#595a5b"]
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1e0kv6')
            .then(res => res.json())
            .then(res => {
                let majorTags = []
                for(let r of res) {
                    for(let tag of r.tags) {
                        if(!majorTags.includes(tag)) {
                            majorTags.push(tag)
                        }
                    }
                }
                let mappedTags = {}
                for(let tag of majorTags) {
                    mappedTags[tag] = this.state.colors[Math.round((Math.random()*(this.state.colors.length-1)))];
                }
                for(let i in res) {
                    res[i].internalLink = "/coding-resources/" + res[i].title.toLowerCase()
                }
                this.setState({
                    resourcesInit: res,
                    resources: res,
                    majorTags,
                    mappedTags,
                    loading: false
                })
            })
            window.scrollTo(0, 0);
    }

    bookmarkHandler = (title) => {
        let toChange = null;
        this.state.resources.forEach((res, i) => {
            if(res.title === title) {
                toChange = i;
            }
        })
        let current = this.state.resources[toChange];
        current.fav = !current.fav;
        let newResources = [
            ...this.state.resources.slice(0, toChange),
            ...this.state.resources.slice(toChange)
        ]
        this.setState({
            resources: newResources
        })
    }

    updateCards = () => {
        const resources = this.state.resourcesInit;
        const tags = this.state.selectedTags;

        if(tags.length === 0) {
            this.setState({
                resources: resources
            })
        } else {
            const newResources = resources.filter(res => {
                for(let tag of res.tags) {
                    if(tags.includes(tag)) {
                        return true
                    }
                }
                return false
            })

            this.setState({
                resources: newResources
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
            <Switch>
                {this.state.resources.map(res => (
                    <Route key={res.title} path={res.internalLink} exact render={() => (
                        <ResourceCardExpanded
                            title={res.title}
                            icon={res.icon}
                            bookmark={this.bookmarkHandler}
                            isBookmarked={res.fav}
                            fetch={res.url}
                            color={this.props.color}/>
                    )} />
                ))}
                <Route path="/coding-resources" render={() => (
                    <>
                        {loader}
                        <div className="resources-page-container">
                            <div className="resources-page-header">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="resource-page-tags">
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
                                {this.state.resources.map(res => {
                                    return (
                                        <ResourceCard
                                            key={res.title}
                                            icon={res.icon}
                                            url={res.internalLink}
                                            title={res.title}
                                            linksCount={res.linksCount}
                                            bookmark={this.bookmarkHandler}
                                            isBookmarked={res.fav}
                                            color={this.props.color}
                                            tags={res.tags}
                                            tagColor={this.state.mappedTags}/>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )} />
            </Switch>
            );
    }
}

export default ResourcesPage;