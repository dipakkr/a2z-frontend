import React from 'react';
import './TopCharts.css';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export default class TopCharts extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ComingSoon message="Stay Updated !! Releasing soon in future versions"  />
        );
    }
}