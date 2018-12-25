import React from 'react';
import './Landing.css';
import Loader from '../Loader/Loader';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import { Link } from 'react-router-dom';

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

    stopLoading = () => {
        this.setState({ loadingBack: false });
    }

    render() {
        const notMobile = window.innerWidth > 480 ? true : false;
        return (
            <>
                {this.state.loadingBack && this.state.loadingBlack ? <Loader message=" " /> : null}
                <div id="sectionOne-container">
                    <SectionOne
                        stopLoading={this.stopLoading}
                    />
                </div>
                <SectionTwo />
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