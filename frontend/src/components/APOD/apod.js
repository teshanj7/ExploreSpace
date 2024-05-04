import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import '../APOD/apod.css';
import UserContext from "../ContextComponents/ContextComponent";

export default function Apod() {
    const { user } = useContext(UserContext);

    const [apodData, setApodData] = useState(null);
    const [todayDate, setTodayDate] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true); // State to track loading

    useEffect(() => {
        const fetchApodData = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=wC8n5rUiWbcaajhxJRO3GNz14zEGkXWqXfH8E7E0');
                setApodData(response.data);
            } catch (error) {
                console.error("Error fetching APOD data:", error);
            }
        }

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        setTodayDate(formattedDate);

        setUserName(user.userName);

        fetchApodData();

        // Set a timeout to change isLoading state after 2.5 seconds
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        // Clean up the timeout to prevent memory leaks
        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <div className="ApodDiv">
            <div><h1 className="ApodHeading">Astronomy Picture Of the Day - {todayDate}</h1></div>
            <div>
                <p className="ApodParaOne">@{userName}, your daily astronomy pic is ready. Check it out and explore the black matter 🚀. </p>
            </div>
            <hr style={{ color: "white", border: "2px solid white" }}></hr>
            {isLoading ? ( // Render loading text if loading is true
                <div><p className="LoadingTextApod">Loading...</p></div>
            ) : (
                apodData && (
                    <div>
                        <h2 className="ApodTitle">{apodData.title}</h2>
                        <hr style={{ color: "white", border: "2px solid white" }}></hr>
                        <img src={apodData.url} alt={apodData.title} className="apodPic" />
                        <h3 className="APodInfoTitle">🔎 Information regarding "{apodData.title}" :</h3>
                        <div className="ApodInfo"><p>{apodData.explanation}</p></div>
                        <br /><br /><br />
                    </div>
                )
            )}
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
        </div>
    )
}
