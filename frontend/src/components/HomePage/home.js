import React, { useState, useContext } from "react";
import '../HomePage/home.css';
import UserContext from '../ContextComponents/ContextComponent';
import homepic1 from '../HomePage/jwst-pic1.png';
import homepic2 from '../HomePage/jwst-pic2.png';
import homepic3 from '../HomePage/jwst-pic3.png';
import cardpic1 from '../HomePage/jwst_card1.jpg';
import cardpic2 from '../HomePage/jwst_card2.jpeg';
import cardpic3 from '../HomePage/jwst_card3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {

    const { user } = useContext(UserContext);
    const userId = user._id;

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    return (
        <div className="HomeDiv">
            <div>
                <h1 className="HomeHeadingOne">Welcome to ExploreSpace™</h1>
                <h3 className="HomeHeadingTwo">✨Where you can explore space at your finger tips✨</h3>
            </div>
            <div className="carouselDiv">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner innerCarouselDiv">
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                            <img src={homepic1} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className={`carousel-item ${index === 1 ? 'active' : ''}`} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                            <img src={homepic2} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className={`carousel-item ${index === 2 ? 'active' : ''}`} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                            <img src={homepic3} className="d-block w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" onClick={handleNext}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="imgContainer">
                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic1} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Astonishing clicks of our universe can be witnessed by your eyes with clear explainations.</p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/apod/${userId}`;
                        }}>APOD</button>
                    </div>
                </div>

                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic2} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Pictures captured by NASA's Curiosity, Opportunity and Spirit on the Martian planet.</p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/marsrover/${userId}`;
                        }}>Mars Rover</button>
                    </div>
                </div>

                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic3} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Manage and view your account and user data at Explore Space. </p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/userprofile/${userId}`;
                        }}>User Profile</button>
                    </div>
                </div>
            </div>
            <div className="homePara">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br/>🌙🪐🌟🚀🌌🛰💫🌏</p>
            </div>
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>


        </div>
    )
}