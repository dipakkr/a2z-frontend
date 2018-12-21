import React from 'react';
import './Landing.css';
import Loader from '../Loader/Loader';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';

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
        return (
            <>
                {this.state.loadingBack && this.state.loadingBlack ? <Loader message=" " /> : null}
                <div id="sectionOne-container">
                    <SectionOne
                        stopLoading={this.stopLoading}
                    />
                </div>
                <SectionTwo />
                <hr />
                <SectionThree />
            </>
        );
    }
}

export default Landing;