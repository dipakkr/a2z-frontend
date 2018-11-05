import React from 'react';
import './ResourcesPage.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import android from '../../assets/images/icons/android.png';
import backend from '../../assets/images/icons/backend.png';
import frontend from '../../assets/images/icons/frontend.png';
import haskell from '../../assets/images/icons/haskell.png';
import ml from '../../assets/images/icons/ml.png';
import python from '../../assets/images/icons/python.png';
import scala from '../../assets/images/icons/scala.png';
import ResourceCardExpanded from '../../components/ResourceCardExpanded/ResourceCardExpanded';
import { Route, Switch, Redirect } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';

class ResourcesPage extends React.Component {

    state = {
        resourcesInit: [
            {
                title: "Python",
                url: "/coding-resources/python",
                linksCount: "50",
                fav: false,
                icon: python,
                type: "Programming Languages",
            },
            {
                title: "Machine Learning",
                url: "/coding-resources/ml",
                linksCount: "62",
                fav: false,
                icon: ml,
                type: "Technologies",
            },
            {
                title: "Android",
                url: "/coding-resources/android",
                linksCount: "57",
                fav: false,
                icon: android,
                type: "Technologies",
            },
            {
                title: "Frontend",
                url: "/coding-resources/frontend",
                linksCount: "125",
                fav: false,
                icon: frontend,
                type: "Technologies",
            },
            {
                title: "Backend",
                url: "/coding-resources/backend",
                linksCount: "75",
                fav: false,
                icon: backend,
                type: "Technologies",
            },
            {
                title: "Haskell",
                url: "/coding-resources/haskell",
                linksCount: "20",
                fav: false,
                icon: haskell,
                type: "Programming Languages",
            },
            {
                title: "Scala",
                url: "/coding-resources/scala",
                linksCount: "57",
                fav: false,
                icon: scala,
                type: "Programming Languages",
            },
        ],

        resources: []
    }

    componentDidMount() {
        this.setState({
            resources: this.state.resourcesInit
        })
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

    filterby = (e) => {
        let filter = e.target.value;
        let newResources = this.state.resourcesInit.filter(res => res.type === filter);
        this.setState({
            resources: newResources
        })
    }

    render() {
        return (
            <div className="resources-page-container">
                <div className="resources-page-header">
                    <h1>{this.props.title}</h1>
                    <Filter filterby={this.filterby} options={['Programming Languages', 'Technologies']} />
                </div>
                <div>
                    {this.state.resources.map(res => {
                        return (
                            <ResourceCard
                                key={res.title}
                                icon={res.icon}
                                url={res.url}
                                title={res.title}
                                linksCount={res.linksCount}
                                bookmark={this.bookmarkHandler}
                                isBookmarked={res.fav}
                                color={this.props.color}/>
                        )
                    })}
                </div>
                <Switch>
                    {this.state.resources.map(res => (
                        <Route key={res.title} path={res.url} exact render={() => (
                            <ResourceCardExpanded
                                title={res.title}
                                icon={res.icon}
                                bookmark={this.bookmarkHandler}
                                isBookmarked={res.fav}
                                color={this.props.color}/>
                        )} />
                    ))}
                    <Redirect to="/coding-resources" />
                </Switch>
            </div>
        );
    }
}

export default ResourcesPage;