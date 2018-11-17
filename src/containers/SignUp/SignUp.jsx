import React from 'react';
import './SignUp.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import { Consumer } from '../../components/Context/Context';
import { auth } from '../../Firebase';

export default class SignUp extends React.Component {
    
    state = {
        email: "",
        password: "",
        error: "",
        repass: false,
    }

    createUser = (e) => {
        if(this.state.error === "" && this.state.repass && this.state.email !== "" && this.state.password !== "") {
            auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(authUser => {
                    this.props.ok()
                    this.props.close(e, "SignUp")
                    this.setState({
                        email: "",
                        password: "",
                        error: "",
                        repass: false,
                    })
                })  
                .catch(err => {
                    alert(err);
                });
        }
    }

    inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    verifyRePass = (e) => {
        let value = e.target.value;
        if(this.state.password !== value ) {
            this.setState({
                error: "repass"
            })
        } else {
            this.setState({
                error: "",
                repass: true
            })            
        }
    }

    render() {

        const errorStyle = {
            'border': '1px solid #f67676'
        }

        return (
            <Consumer>
                {({ toggleModals }) => {
                    return (
                        <>
                            <Backdrop clicked={(e) => toggleModals(e, "SignUp")} />
                            <div className="signup-container">
                                <span onClick={(e) => toggleModals(e, "SignUp")} role="img" aria-label="close" className="signup-close">❌</span>
                                <h2>SignUp</h2>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={this.inputHandler}
                                    placeholder="Email"
                                    style={(this.state.error === "email") ? errorStyle : null} />
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.inputHandler}
                                    placeholder="Password"
                                    style={(this.state.error === "password") ? errorStyle : null} />
                                <input
                                    type="password"
                                    name="repass"
                                    onChange={this.verifyRePass}
                                    placeholder="Re-Type Password"
                                    style={(this.state.error === "repass") ? errorStyle : null} />
                                <input
                                    type="submit"
                                    value="Create Account"
                                    onClick={this.createUser} />
                            </div>
                        </>
                    );  
                }}
            </Consumer>
        );
        
    }
}