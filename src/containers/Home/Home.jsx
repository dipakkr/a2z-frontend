import React from 'react';
import './Home.css';
import CardLink from '../../components/CardLink/CardLink';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container">
                <h1 className="heading">Explore the ultimate collection</h1>
                <p className="sub-heading">What's on your mind today? Want to do self-study? Explore new peers?</p>

                <div className="grid">
                    <div className="grid-item">
                        <CardLink href="/">Python</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="red" href="/">Javascript</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="green" href="/">Node.js</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="#ac00e6" href="/">Machine Learning</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="#53ff1a" href="/">Java</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="#0066ff" href="/">Hackathons & Contests</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="red" href="/">Surprise Me!</CardLink>
                    </div>
                </div>
            </div>
        );
    }
}