import React from 'react';
import './ProgramsPage.css';
import StudentBenefits from '../../components/StudentBenefits/StudentBenefits';
import Loader from '../../components/Loader/Loader';

export default class ProgramsPage extends React.Component {

    state = {
        loading: true,
        studentBenefits: {}
    }

    componentDidMount() {
        fetch("https://api.myjson.com/bins/143q9e")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    studentBenefits: res
                });
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <>
                {(this.state.loading) ? <Loader /> : null}
                <div className="programs-page-container">
                    <div id="students-benefits">
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
                </div>
            </>
        );
    }
}