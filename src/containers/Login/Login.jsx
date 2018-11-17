import React from 'react';
import './Login.css';
import profile from '../../assets/images/man.png';
import Backdrop from '../../components/Backdrop/Backdrop';
import { Consumer } from '../../components/Context/Context';
import { auth } from '../../Firebase';

export default class Login extends React.Component {
    
    state = {
        email: "",
        password: "",
    }

    verifyUser = (e) => {
        if(this.state.email !== "" && this.state.password !== "") {
            auth.doSingInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.props.ok();
                    this.props.close(e, "Login");
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Consumer>
                {({ toggleModals }) => {
                    return (
                        <>
                            <Backdrop clicked={(e) => toggleModals(e, "Login")} />
                            <div className="login-container">
                                <span onClick={(e) => toggleModals(e, "Login")} role="img" aria-label="close" className="login-close">❌</span>
                                <img src={profile} alt="" />
                                <input type="email" name="email" onChange={this.inputHandler} placeholder="Email" />
                                <input type="password" name="password" onChange={this.inputHandler} placeholder="Password" />
                                <input type="submit" value="Login" onClick={this.verifyUser} />
                            </div>
                        </>
                    );  
                }}
            </Consumer>
        );
        
    }
}