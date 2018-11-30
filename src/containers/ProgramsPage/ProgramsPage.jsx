import React from 'react';
import './ProgramsPage.css';
import StudentBenefits from '../../components/StudentBenefits/StudentBenefits';
import Loader from '../../components/Loader/Loader';
import OpenSource from '../../components/OpenSource/OpenSource';
import StartupPrograms from '../../components/StartupPrograms/StartupPrograms';
import os1 from '../../assets/images/code.jpg';
import os2 from '../../assets/images/code2.jpeg';
import os3 from '../../assets/images/code3.jpg';
import os4 from '../../assets/images/code4.png';

export default class ProgramsPage extends React.Component {

    state = {
        loading: true,
        studentBenefits: [],
        openSource: [],
        startupPrograms: [],
        fellowship: [],
    }

    componentDidMount() {
        const studentBenefits = fetch("https://api.myjson.com/bins/sbxgy");
        const openSource = fetch("https://api.myjson.com/bins/9reca");
        const startupPrograms = fetch("https://api.myjson.com/bins/154dpe");
        const fellowship = fetch("https://api.myjson.com/bins/pw1w2");

        Promise
            .all([studentBenefits, openSource, startupPrograms, fellowship])
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))
            })
            .then(responses => {
                this.setState({
                    loading: false,
                    studentBenefits: responses[0],
                    openSource: responses[1],
                    startupPrograms: responses[2],
                    fellowship: responses[3]
                })
            })
        window.scrollTo(0, 0);
    }

    render() {

        const openSource = <div id="open-source" className="section">
            <h1>Open Source Programs</h1>
            {this.state.openSource.map((el, i) => {
                let bgImg = null;
                if(i % 3 === 0) bgImg = os1;
                else if(i % 3 === 1) bgImg = os2;
                else bgImg = os4;
                return (
                    <OpenSource key={i} bgImg={bgImg} title={el.title} link={el.url} stipend={el.incentives} />
                );
            })}
        </div>

        const studentBenefits = <div id="students-benefits" className="section">
            <h1>Student Benefits</h1>
            <div className="row">
                <div className="column">
                    {/* <StudentBenefits title="Campus Ambassador Programs" links={this.state.studentBenefits["Campus Ambassador Programs"] || []} /> */}
                    <StudentBenefits title="Student Benefits and Packs" links={this.state.studentBenefits || []} />
                </div>
                <div className="column">
                    <StudentBenefits title="Student Fellowship Programs" links={this.state.fellowship || []} />
                    {/* <StudentBenefits title="Scholarships" links={this.state.studentBenefits["Scholarships"] || []} /> */}
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
            </div>
        } else if (this.props.page === "2") {
            view = <div className="programs-page-container">
                {openSource}
               
            </div>
        } else if (this.props.page === "3") {
            view = <div className="programs-page-container">
                {startupPrograms}
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