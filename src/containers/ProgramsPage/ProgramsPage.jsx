import React from 'react';
import './ProgramsPage.css';
import StudentBenefits from '../../components/StudentBenefits/StudentBenefits';
import Loader from '../../components/Loader/Loader';
import OpenSource from '../../components/OpenSource/OpenSource';

export default class ProgramsPage extends React.Component {

    state = {
        loading: true,
        studentBenefits: {},
        openSource: [],
    }

    componentDidMount() {

        const studentBenefits = fetch("https://api.myjson.com/bins/143q9e");
        const openSource = fetch("https://api.myjson.com/bins/135foy");

        Promise
            .all([studentBenefits, openSource])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    studentBenefits: responses[0],
                    openSource: responses[1]
                })
            })
    }

    render() {

        const openSource = <div id="open-source" className="section">
            <h1>Open Source Programs</h1>
            {this.state.openSource.map((el, i) => {
                return (
                    <OpenSource key={i} title={el.title} link={el.link} org={el.org} stipend={el.stipend} />
                );
            })}
        </div>

        const studentBenefits = <div id="students-benefits" className="section">
            <h1>Student Benefits</h1>
            <div className="row">
                <div className="column">
                    <StudentBenefits title="Campus Ambassador Programs" links={this.state.studentBenefits["Campus Ambassador Programs"] || []} />
                    <StudentBenefits title="Student Benefits and Packs" links={this.state.studentBenefits["Student Benefits and Packs"] || []} />
                </div>
                <div className="column">
                    <StudentBenefits title="Student Fellowship Programs" links={this.state.studentBenefits["Student Fellowship Programs"] || []} />
                    <StudentBenefits title="Scholarships" links={this.state.studentBenefits["Scholarships"] || []} />
                </div>
            </div>
        </div>

        let view = null;
        if (this.props.page === "1") {
            view = <div className="programs-page-container">
                {studentBenefits}
                {openSource}
            </div>
        } else if (this.props.page === "2") {
            view = <div className="programs-page-container">
                {openSource}
                {studentBenefits}
            </div>
        }

        return (
            <>
                {(this.state.loading) ? <Loader /> : null}
                {view}
            </>
        );
    }
}