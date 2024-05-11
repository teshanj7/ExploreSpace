import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';
import UserContext from "../ContextComponents/ContextComponent";

export default function Header(props) {

    const location = useLocation();
    const { user } = useContext(UserContext);


    //Log out function
    function logOut() {
        localStorage.clear();
        window.location.href = `/`
    }


    const hideHeader = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

    if (hideHeader) {
        return null; // Render nothing if header should be hidden
    }

    return (

        <nav className="navbar navbar-expand-lg" style={{ background: "#000000" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <b><a className="navbar-brand" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/home/${user._id}`;
                }} style={{ color: "#FFFFFF", fontSize: "45px", paddingRight: "80px" }}>ExploreSpace™</a></b>
                {/* change */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/apod/${user._id}`;
                            }} style={{ color: "#FFFFFF", paddingRight: "80px", fontWeight: "bold" }}>APOD</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/marsrover/${user._id}`;
                            }} style={{ color: "#FFFFFF", paddingRight: "80px", fontWeight: "bold" }}>Mars Rover Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/userprofile/${user._id}`;
                            }} style={{ color: "#FFFFFF", paddingRight: "80px", fontWeight: "bold" }}>User Profile</a>
                        </li>
                    </ul>

                    <button className="btn" style={{ background: "#FFFFFF", color: "black" }} onClick={logOut}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}
