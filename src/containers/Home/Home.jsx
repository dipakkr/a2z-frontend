import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container">
                <h1 className="heading">Explore the ultimate collection</h1>
                <p className="sub-heading">What's on your mind today? Want to do self-study? Explore new peers?</p>
            </div>
        );
    }
}