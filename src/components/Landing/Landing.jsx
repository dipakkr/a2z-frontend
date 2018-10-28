import React from 'react';
import './Landing.css';
import back from '../../assets/images/back.svg';
import purple from '../../assets/images/stylish.svg';
import LinkButton from '../LinkButton/LinkButton';

class Landing extends React.Component {

    componentDidMount() {
        this.props.toggleLanding();
    }

    componentWillUnmount() {
        this.props.toggleLanding();
    }

    render() {
        return (
            <div id="landing-page-container">
                <div id="special-container">
                    <h1>A-2-Z Resources for Students</h1>
                    <p>Explore the ultimate collection</p>
                    <div><LinkButton
                        href="/home"
                        styles={{
                            background: 'linear-gradient(#fca15a,#f587b0)'
                          }}>Get Started</LinkButton></div>
                </div>
                <img src={purple} alt="" className="background-svg-2" />
                <img src={back} alt="" className="background-svg-1" />
                
            </div>
        );
    }
}

export default Landing;