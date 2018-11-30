import React from 'react';
import './ResourceCardExpanded.css';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import LinkButton from '../LinkButton/LinkButton';
import Loader from '../Loader/Loader';

class ResourceCardExpanded extends React.Component {

    state = {
        loading: true,
        linksInit: [],
        links: [],
        majorTags: [],
        mappedTags: {},
        selectedTags: [],
        colors: ["#dbc224", "#8465ac", "#06addb", "#49dbbd", "#f67676", "#6fbb2d", "#257281", "#595a5b"]
    }

    componentDidMount() {
        fetch(this.props.fetch)
            .then(res => res.json())
            .then(res => {
                let majorTags = []
                for(let r of res) {
                    r.tags = r.tags.split(',').filter(tag => tag.length > 0 ? true : false);
                    for(let tag of r.tags) {
                        if(!majorTags.includes(tag) && tag.length > 0) {
                            majorTags.push(tag)
                        }
                    }
                }
                let mappedTags = {}
                for(let tag of majorTags) {
                    mappedTags[tag] = this.state.colors[Math.round((Math.random()*(this.state.colors.length-1)))];
                }
                this.setState({
                    linksInit: res,
                    links: res,
                    majorTags,
                    mappedTags,
                    loading: false
                })
            })
    }

    updateLinks = () => {
        const links = this.state.linksInit;
        const tags = this.state.selectedTags;

        if(tags.length === 0) {
            this.setState({
                links: links
            })
        } else {
            const newlinks = links.filter(res => {
                for(let tag of res.tags) {
                    if(tags.includes(tag)) {
                        return true
                    }
                }
                return false
            })

            this.setState({
                links: newlinks
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
            }, this.updateLinks)
        } else {
            currentTags.push(tag);
            this.setState({
                selectedTags: currentTags
            }, this.updateLinks)
        }
    }

    render() {

        const loader = this.state.loading ? <Loader /> : null;

        return (
            <>
                {loader}
                <div className="expanded-resource-card">
                    <h2>
                        <span>
                            <span>
                                <Link to="/coding-resources"> 
                                    <button className="close">
                                        ◀
                                    </button>
                                </Link>
                            </span>
                            {this.props.title}
                        </span>
                        <span
                            className="fa fa-star"
                            onClick={() => this.props.bookmark(this.props.title)}
                            style={{ 
                                cursor: 'pointer',
                                textShadow: '0px 0px 1px rgba(0,0,0,0.5)',
                                color: this.props.isBookmarked ? this.props.color : '#ddd'
                            }}>
                        </span>
                    </h2>
                    <div className="resource-tags">
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
                    <div className="resource-links-container">
                        {this.state.links.map((l, i) => l.description.length > 0 ? (
                            <LinkButton
                                key={i}
                                link={l.link}
                                description={l.description}
                                tags={l.tags}
                                tagColors={this.state.mappedTags} />
                        ) : null)}
                    </div>
                </div>
            </>
        );
    }
}

export default ResourceCardExpanded;