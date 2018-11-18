import React from 'react';
import './Dashboard.css';
import ComingSoon from '../../components/ComingSoon/ComingSoon'

export default class Dashboard extends React.Component {
    render() {
        return (
            <ComingSoon message="Developers are working to create a personalized space of links for you..." />
        );
    }
}