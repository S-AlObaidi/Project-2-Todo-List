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
            <form>
                <input type="email" placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} /> <br />
                <input type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} /> <br />
                <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <button onClick={reg} className='btn btn-warning'>Register 💬</button> <br />
                <Link to="/login" >
                    <button className='btn btn-success' type='submit' onClick={goLogin}>Have an Account ?</button>
                </Link>
            </form>
        </div>
    )
}
