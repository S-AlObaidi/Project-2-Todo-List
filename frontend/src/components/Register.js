import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Register(props) {

    const goLogin = () => {
        props.goLogin();
    }

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [username, setUsername] = useState([]);

    const reg = (e) => {
        // e.preventDefault();

        const newUser = {
            email,
            password,
            username,
        };
        axios
            .post(`http://localhost:5000/register`, newUser)
            .then((response) => {
                console.log("DATA: ", response.data);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }

    return (
        <div className='Register'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className='Login-logo' src="https://cutewallpaper.org/24/sign-up-png/sign-up.png" alt="" />
                        <form>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning m-2" onClick={reg}>Register 💬</button>
                            <Link to="/login" >
                                <button className='btn btn-success m-2' type='submit' onClick={goLogin}>Have an Account ?</button>
                            </Link>
                        </form>
                    </div>
                    <div className="col">
                        <img className='Lo-img' src="https://static.wikia.nocookie.net/captaintsubasa/images/d/d8/Ryo_Ishizaki_Japan_2018_2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}