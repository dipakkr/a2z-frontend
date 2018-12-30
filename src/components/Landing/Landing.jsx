import React from 'react';
import './Landing.css';
import Loader from '../Loader/Loader';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import { Link } from 'react-router-dom';

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            loadingBack: true,
            loadingBlack: true,
        }
    }

    componentDidMount() {
        this.props.toggleLanding();
    }

    componentWillUnmount() {
        this.props.toggleLanding();
    }

    stopLoading = () => {
        this.setState({ loadingBack: false });
    }

    handleScroll = () => {
        window.scrollTo({
            top: this.myRef.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    render() {
        const notMobile = window.innerWidth > 480 ? true : false;
        const isDesktop = window.innerWidth > 960 ? true : false;

        return (
            <>
                {this.state.loadingBack && this.state.loadingBlack ? <Loader message=" " /> : null}
                <div id="sectionOne-container">
                    <SectionOne
                        stopLoading={this.stopLoading}
                    />
                    {isDesktop &&
                        <div className="scroll-div">
                            <button className="scroll-btn" title="Scroll Down" onClick={this.handleScroll}>
                                <i className="down"></i>
                            </button>
                        </div>}
                </div>
                <div ref={this.myRef}>
                    <SectionTwo />
                </div>
                {/* <hr />
                <SectionThree /> */}
                {notMobile &&
                    <hr />
                }
                <SectionFour />
                <div id="get-started"><Link to="/home">Get Started</Link></div>
            </>
        );
    }
}

export default Landing;