import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
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
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }
    return (
        <div>
            <form>
                <input type="email" value={email} placeholder='E-mail' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit" onClick={log}>Login ☑</button>
            </form>
        </div>
    )
}