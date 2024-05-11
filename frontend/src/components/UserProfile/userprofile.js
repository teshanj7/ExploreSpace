import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import '../UserProfile/userprofile.css';
import UserContext from '../ContextComponents/ContextComponent';
import nasalogo from '../UserProfile/nasalogo.png';
import usercardpic from '../UserProfile/astronaut.jpg';


export default function UserProfile() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    const { user } = useContext(UserContext);
    const userId = user._id;
    const userFullName = user.fullName;
    const userEmail = user.email;
    const userUName = user.userName;

    useEffect(()=>{
        setFullName(userFullName);
        setEmail(userEmail);
        setUserName(userUName);
    })

    //delete
    const deleteUser = async (_id) => {
        if (window.confirm("Do you want to delete your user account?")) {
            const res = await axios.delete(`https://explorespace-be.onrender.com/user/delete/${_id}`);
            if (res.status === 200) {
                window.location.href = ``;
                toast.error('User account deleted..!', {
                    position: "top-right",
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
    }

    return (
        <div className="HomeDiv">
            <div>
                <img src={nasalogo} className="profileLogo" />
                <h1 className="profileHeading">Your User Profile</h1>
            </div>

            <div>
                <div class="card mb-3 userCard">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={usercardpic} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title"><b>{fullName}</b>'s User Profile</h3>
                                <p class="card-text">Your User Information is listed in this card accordingly, you can either update or delete your details respectively.</p>
                                <br/>
                                <h5 class="card-title userProfileHeading">👤 User's Full Name:</h5>
                                <p class="card-text userProfileText">▶ {fullName}</p>
                                <h5 class="card-title userProfileHeading">📧 User's Email:</h5>
                                <p class="card-text userProfileText">▶ {email}</p>
                                <h5 class="card-title userProfileHeading">@ User's Username:</h5>
                                <p class="card-text userProfileText">▶ @{userName}</p>
                                <br/><br/>
                                <button className="btn btn-primary profileBtn">Update Account</button>
                                <button className="btn btn-danger profileBtn" onClick={() => deleteUser(userId)}>Delete Account</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
            <ToastContainer />

        </div>
    )
}