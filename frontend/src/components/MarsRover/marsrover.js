import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../MarsRover/marsrover.css';
import UserContext from "../ContextComponents/ContextComponent";
import cardpic1 from '../MarsRover/curiosity1.jpg';
import cardpic2 from '../MarsRover/opportunity.jpg';
import cardpic3 from '../MarsRover/spirit.jpg';
import nasapic from '../MarsRover/nasalogo.png';

const MarsRoverPhotos = () => {

    const { user } = useContext(UserContext);
    const userId = user._id;

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            try {
                const response = await axios.get(
                    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wC8n5rUiWbcaajhxJRO3GNz14zEGkXWqXfH8E7E0'
                );
                setPhotos(response.data.photos);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Mars Rover photos:', error);
                setLoading(false);
            }
        };
        setUserName(user.userName);
        fetchRoverPhotos();
    }, []);

    return (
        <div>
            <h1 className='roverHeading'>Mars Rover Photos</h1>
            <div>
                <p className="roverParaOne">@{userName}, check out our collection of photos of the martian planet clicked by Nasa's Curiosity, Opportunity and Spirit Rovers. 👽🚀. </p>
            </div>
            <div className="imgContainer">
                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic1} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Astonishing photographer of our neighboring martian planet, meet the Curiosity Rover.</p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/curiosity/${userId}`;
                        }}>Curiosity</button>
                    </div>
                </div>

                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic2} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Astonishing photographer of our neighboring martian planet, meet the Opportunity Rover.</p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/opportunity/${userId}`;
                        }}>Opportunity</button>
                    </div>
                </div>

                <div class="card imgCard" style={{ width: "33%;" }}>
                    <img src={cardpic3} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column align-items-center">
                        <p class="card-text" style={{ textAlign: "center" }}>Astonishing photographer of our neighboring martian planet, meet the Spirit Rover.</p>
                        <button type="button" class="btn btn-dark homebtnCard" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/spirit/${userId}`;
                        }}>Spirit</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={nasapic} className='roverNasaPic' onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://www.nasa.gov`;
                }} />
            </div>
            <div>
                <p className="roverParaOne">The following carousel displays real images of the martian surface clicked by the Curiosity, Opportunity and Spirit Rovers owned by NASA. </p>
            </div>
            {loading ? (
                <p className='LoadingScreen'>Loading...</p>
            ) : (
                <div id="carouselExampleControls" className="carousel slide marsRoverPic" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {photos.map((photo, index) => (
                            <div key={photo.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={photo.img_src} className="d-block w-100 marsRoverimg" alt="Mars Rover" />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default MarsRoverPhotos;
