import React from 'react';
import './SlidingNavLinks.css';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context/Context';

const SlidingNavLinks = (props) => {
    return (
        <Consumer>
            {({ navHandler }) => (
                <Link to={props.link}  style={{ textDecoration: 'none' }}>
                    <div className="sliding-nav-link-container"  onClick={navHandler}>
                        <p>{props.title}</p>
                    </div>
                </Link>
            )}
        </Consumer>
    );
}

export default SlidingNavLinks;