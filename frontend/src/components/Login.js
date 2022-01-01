import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(null);
    const [loginMessage, setLoginMessage] = useState("");

    const log = (e) => {
        e.preventDefault();

        const userInfo = {
            email,
            password,
        }
        axios
            .post(`http://localhost:5000/login`, userInfo)
            .then((response) => {
                // console.log("DATA: ", response.data);
                props.setIsLoggedIn(true);
                props.setUsername(response.data.username);
                setLoginStatus(response.status);
                setLoginMessage(response.data.message);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
                setLoginStatus(err.response.status);
                setLoginMessage(err.response.data.message);
            });
    }

    return (
        <div className='Login'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className='Login-logo' src="https://logindesigns.com/front/Login%20logo/logo-color.png" alt="" />
                        <form>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary m-2" onClick={log}>Sign in</button>
                            <Link to="/register" >
                                <button className='btn btn-warning m-2' type='submit'>Don't Have an Account ?</button>
                            </Link>
                            {loginStatus === 200 && (
                                <div className="alert alert-success" role="alert">
                                    {loginMessage} Go to <Link to="/home" >Home</Link>
                                </div>
                            )}

                            {(loginStatus === 400 || loginStatus === 404) && (
                                <div className="alert alert-danger" role="alert">
                                    {loginMessage}
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="col">
                        <img className='Lo-img' src="https://static.bandainamcoent.eu/high/captain-tsubasa/03-news/scenario%20and%20patch%20120/Image8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}