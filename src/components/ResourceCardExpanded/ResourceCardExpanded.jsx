import React from 'react';
import './ResourceCardExpanded.css';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

class ResourceCardExpanded extends React.Component {
    render() {
        return (
            <>
                <Link to="/coding-resources">
                    <Backdrop clicked={() => null} />
                </Link>
                <div className="expanded-resource-card">
                    <h2>
                        <span>
                            <span>
                                <img src={this.props.icon} alt="" />
                            </span>
                            {this.props.title}
                        </span>
                        <span>
                            <span
                                className="fa fa-star"
                                onClick={() => this.props.bookmark(this.props.title)}
                                style={{ 
                                    cursor: 'pointer',
                                    textShadow: '1px 2px 10px rgba(0,0,0,0.3)',
                                    color: this.props.isBookmarked ? this.props.color : 'white'
                                }}>
                            </span>
                            <span>
                                <Link to="/coding-resources"> 
                                    <button  className="close">
                                        <span role="img" aria-label="close-button">❌</span>
                                    </button>
                                </Link>
                            </span>
                        </span>
                    </h2>
                </div>
            </>
        );
    }
}

export default ResourceCardExpanded;