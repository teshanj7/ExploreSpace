import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../ContextComponents/ContextComponent';
import '../Login/login.css';
import nasapic from '../Index/nasalogo.png';

export default function Login() {

    const history = useNavigate();
    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();

        let result = await fetch("http://localhost:8070/auth/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            } 
        });

        const data = await result.json();
        console.log(data);
        setUser(data.user);

        if(data.user.fullName){
            localStorage.setItem('newUser', JSON.stringify(result))
            history(`/home/${data.user._id}`, { state: { name: data.user.fullName}})
        }else{
            toast.warn('Please enter correct details..!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
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
            <div className="loginHeadingDiv">
                <h2 className="loginHeading">⎆ Login to ExploreSpace</h2>
            </div>
            <br /><br /><br />
            <div className="loginFormDiv px-3">
                <form action="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">📧 Email Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here" onChange={(e) => {
                            setEmail(e.target.value)
                        }} value={email} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">🔒 Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here" onChange={(e) => {
                            setPassword(e.target.value)
                        }} value={password} required/>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn" onClick={login}>Login</button>
                    <p className="loginText">Don't have an account? <a href="/register">Sign up here</a></p>
                </form>
            </div>
            <div className="loginFooter">
                <p style={{ color: "white" }}>
                    © 2024 ExploreSpace All Rights Reserved.
                </p>
            </div>
            <ToastContainer />
        </div>

    )
}
