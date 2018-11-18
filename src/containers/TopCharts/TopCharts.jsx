import React from 'react';
import './TopCharts.css';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export default class TopCharts extends React.Component {
    render() {
        return (
            <ComingSoon message="A list of trending resources. Coming Soon..." />
        );
    }
}