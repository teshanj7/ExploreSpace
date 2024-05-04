import React from 'react';
import '../Curiosity/Curiosity.css';
import curiositypic from '../MarsRover/curiosity.jpg';

const CuriosityRover = () => {

    return (
        <div>
            <h1 className='curiosityHeading'>Curiosity Rover</h1>
            <div className='curiosityFlexBox'>
                <img src={curiositypic} className='curiosityPic' />
                <div className='ParaDivCurio'>
                    <p className='curiosityPara'>Curiosity is a car-sized Mars rover exploring Gale crater and Mount Sharp on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on November 26, 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on August 6, 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.</p>
                </div>
            </div>
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default CuriosityRover;
