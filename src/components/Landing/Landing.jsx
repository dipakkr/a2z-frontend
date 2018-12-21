import React from 'react';
import './Landing.css';
import Loader from '../Loader/Loader';
import SectionOne from './SectionOne/SectionOne';

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
                <div>
                    <h1>Section 2</h1>
                </div>
            </>
        );
    }
}

export default Landing;