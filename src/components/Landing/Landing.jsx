import React from 'react';
import './Landing.css';
import back from '../../assets/images/back.png';
import Test from '../../assets/images/svg1-small.svg';
import Test2 from '../../assets/images/Svg2-large.svg';
import black from '../../assets/images/vector.png';
import side from '../../assets/images/side-drop.png';
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
                    {/* <img src={black} alt="" className="background-svg-2" onLoad={() => this.setState({ loadingBlack: false })} /> */}
                    <img src={back} alt="" className="background-svg-1" onLoad={() => this.setState({ loadingBack: false })} />
                    {/* <img src={side} alt="" className="background-svg-3" /> */}
                    <img src={Test} alt="" className="background-svg-10" onLoad={() => this.setState({ loadingBlack: false })} />
                    <img src={Test2} alt="" className="background-svg-20" onLoad={() => this.setState({ loadingBlack: false })} />
                    <div className="scroll-div">
                        <button className="scroll-btn" title="Click to stay updated"><i className="down"></i></button>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;