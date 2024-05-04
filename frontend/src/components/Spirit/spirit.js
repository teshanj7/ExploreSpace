import React from 'react';
import '../Opportunity/Opportunity.css';
import spiritpic from '../Spirit/spirit.jpg';

const SpiritRover = () => {

    return (
        <div>
            <h1 className='opportunityHeading'>Spirit Rover</h1>
            <div className='opportunityFlexBox'>
                <img src={spiritpic} className='opportunityPic' />
                <div className='ParaDivOppo'>
                    <p className='opportunityPara'>Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (2269 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet.</p>
                </div>
            </div>
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default SpiritRover;
