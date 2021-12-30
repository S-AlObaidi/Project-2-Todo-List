import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const log = (e) => {
        e.preventDefault();

        const userInfo = {
            email,
            password,
        }
        axios
            .post(`http://localhost:5000/login`, userInfo)
            .then((response) => {
                console.log("DATA: ", response.data);
                props.setIsLoggedIn(true);
                props.setUsername(response.data.username);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }
    return (
        <div className='Login'>
            <form>
                <input type="email" value={email} placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} /> <br />
                <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <button className='btn btn-success' type="submit" onClick={log}>Login 🌐</button> <br />
                <Link to="/register" >
                    <button className='btn btn-warning' type='submit'>Don't Have an Account ?</button>
                </Link>
            </form>
        </div>
    )
}