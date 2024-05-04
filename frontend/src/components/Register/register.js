import React, { useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import '../Register/regsiter.css';
import nasapic from '../Index/nasalogo.png';

export default function Register() {

    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();

        const newUser = { fullName, email, userName, password }

        axios.post("http://localhost:8070/auth/add", newUser).then(() => {
            alert("User Registered Successfully, Welcome to ExploreSpace!🪐")
            window.location.href = `/login`;
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div className="indexBody d-flex flex-column min-vh-100">
            <div className="indexNavBar">
                <div className="indexNav">
                    <h1 className="indexHeading">ExploreSpace™</h1>
                </div>
                <div className="indexLogo">
                    <img src={nasapic} className="indexNasa" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `https://www.nasa.gov`;
                    }} />
                </div>
            </div>
            <div className="registerHeadingDiv">
                <h2 className="loginHeading">Welcome to ExploreSpace!🪐</h2>
            </div>
            <br />
            <div className="registerFormDiv px-3">
                <form onSubmit={sendData}>
                    <div class="mb-3">
                        <label for="fullName" class="form-label">👤 Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name here" onChange={(e) => {
                            setName(e.target.value);
                        }} required/>
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">📧 Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required/>
                    </div>
                    <div class="mb-3">
                        <label for="UserName" class="form-label">@ User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username here" onChange={(e) => {
                            setUsername(e.target.value);
                        }} required/>
                    </div>
                    <div class="mb-3">
                        <label for="Password" class="form-label">🔒 Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a suitable password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required/>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn">Register</button>
                    <p className="registerText py-2">Already have an account? <a href="/login">Login here</a></p>
                </form>
            </div>
            <div className="registerFooter">
                <p style={{ color: "white" }}>
                    © 2024 ExploreSpace All Rights Reserved.
                </p>
            </div>
        </div>

    )
}
