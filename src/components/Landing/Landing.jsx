import React from 'react';
import './Landing.css';
import back from '../../assets/images/back.png';
import blackLeft from '../../assets/images/svg1-small.svg';
import blackRight from '../../assets/images/Svg2-large.svg';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

class Landing extends React.Component {

    state = {
        loadingBack: true,
        loadingBlack: true,
    }

    componentDidMount() {
        this.props.toggleLanding();
    }

    componentWillUnmount() {
        this.props.toggleLanding();
    }

    render() {
        return (
            <>
                {this.state.loadingBack && this.state.loadingBlack ? <Loader message=" " /> : null}
                <div id="landing-page-container">
                    <div id="special-container">
                        <h1>Resources for Students</h1>
                        <p>Explore the ultimate collection</p>
                        <div><Link to="/home">Get Started</Link></div>
                    </div>
                    <img src={back} alt="" className="background-svg-1" onLoad={() => this.setState({ loadingBack: false })} />
                    <img src={blackLeft} alt="" className="background-svg-10" onLoad={() => this.setState({ loadingBlack: false })} />
                    <img src={blackRight} alt="" className="background-svg-20" onLoad={() => this.setState({ loadingBlack: false })} />
                    <div className="scroll-div">
                        <button className="scroll-btn" title="Click to stay updated"><i className="down"></i></button>
                    </div>
                </div>
                <div>
                    {/* <h1>Section 2</h1> */}
                </div>
            </>
        );
    }
}

export default Landing;