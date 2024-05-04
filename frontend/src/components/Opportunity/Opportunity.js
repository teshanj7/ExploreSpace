import React from 'react';
import '../Opportunity/Opportunity.css';
import opportunitypic from '../Opportunity/opportunity.jpg';

const OpportunityRover = () => {

    return (
        <div>
            <h1 className='opportunityHeading'>Opportunity Rover</h1>
            <div className='opportunityFlexBox'>
                <img src={opportunitypic} className='opportunityPic' />
                <div className='ParaDivOppo'>
                    <p className='opportunityPara'>Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018. Opportunity was operational on Mars for 5111 sols (14 years, 138 days on Earth). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet.</p>
                </div>
            </div>
            <div className="homeFooter">
                <p>© 2024 ExploreSpace All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default OpportunityRover;
