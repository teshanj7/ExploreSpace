import React from "react";
import '../Index/index.css';
import nasapic from '../Index/nasalogo.png';

export default function Index() {
    return (
        <div className="indexBody d-flex flex-column min-vh-100">
            <div className="indexNavBar">
                <div className="indexNav">
                    <h1 className="indexHeading">ExploreSpace™</h1>
                </div>
                <div className="indexLogo">
                    <img src={nasapic} className="indexNasa" alt="NASA Logo" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `https://www.nasa.gov`;
                    }} />
                </div>
            </div>
            <div className="indexBtnDiv flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-light me-md-2 px-4 indexBtn" type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/login`;
                        }}>Login</button>
                        <button className="btn btn-light px-4 indexBtn" type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/register`;
                        }}>Signup</button>
                    </div>
                    <p className="IndexBottom" style={{ color: "white" }}>
                        © 2024 ExploreSpace All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
