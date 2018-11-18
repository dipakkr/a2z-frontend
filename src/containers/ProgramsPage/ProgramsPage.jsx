import React from 'react';
import './ProgramsPage.css';
import StudentBenefits from '../../components/StudentBenefits/StudentBenefits';
import Loader from '../../components/Loader/Loader';
import OpenSource from '../../components/OpenSource/OpenSource';
import StartupPrograms from '../../components/StartupPrograms/StartupPrograms';

export default class ProgramsPage extends React.Component {

    state = {
        loading: true,
        studentBenefits: {},
        openSource: [],
        startupPrograms: [],
    }

    componentDidMount() {
        const studentBenefits = fetch("https://api.myjson.com/bins/143q9e");
        const openSource = fetch("https://api.myjson.com/bins/135foy");
        const startupPrograms = fetch("https://api.myjson.com/bins/154dpe");

        Promise
            .all([studentBenefits, openSource, startupPrograms])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    studentBenefits: responses[0],
                    openSource: responses[1],
                    startupPrograms: responses[2],
                })
            })
        window.scrollTo(0, 0);
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

        const startupPrograms = <div id="startup-programs" className="section">
            <h1>Startup Programs and Incubators</h1>
            {this.state.startupPrograms.map((el, i) => {
                return (
                    <StartupPrograms key={i} title={el.title} link={el.link} org={el.org} />
                );
            })}
        </div>

        let view = null;
        if (this.props.page === "1") {
            view = <div className="programs-page-container">
                {studentBenefits}
                {openSource}
                {startupPrograms}
            </div>
        } else if (this.props.page === "2") {
            view = <div className="programs-page-container">
                {openSource}
                {studentBenefits}
                {startupPrograms}
            </div>
        } else if (this.props.page === "3") {
            view = <div className="programs-page-container">
                {startupPrograms}
                {studentBenefits}
                {openSource}
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