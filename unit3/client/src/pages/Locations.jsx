import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI';
import stardewImage from '../assets/Map.png'; 
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await getAllLocations();
                setLocations(locationsData);
            } catch (error) {
                console.error("here" + error);
            }
        })();
    }, []);

    return (
        <div className='available-locations'>
            <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 919 560" 
                preserveAspectRatio="xMidYMid slice" 
                className="map-svg"
            >
                <image 
                    id="background" 
                    xlinkHref={stardewImage} 
                    width="100%" 
                    height="100%" 
                    alt="Stardew Valley Background" 
                />
                <a href='/pelican-town'>
                    <polygon 
                        id="pelican-town" 
                        points="399.0721130371094,231 364.47312927246094,278.6214141845703 308.4908142089844,260.43165588378906 308.4908142089844,201.56834411621094 364.47312927246094,183.3785858154297 399.0721130371094,231" 
                        fill="transparent" 
                        stroke="red" 
                    />
                </a>
                <a href='/copper-mine'>
                    <polygon 
                        id="copper-mine" 
                        points="726.5360107421875,96 692.9984741210938,142.16046905517578 638.7335510253906,124.52873992919922 638.7335510253906,67.47126007080078 692.9984741210938,49.83953285217285 726.5360107421875,96" 
                        fill="transparent" 
                        stroke="red" 
                    />
                </a>
                <a href='/strawberry-festival'>
                    <polygon 
                        id="strawberry-festival" 
                        points="597.7611694335938,182 564.7590026855469,227.423583984375 511.3603820800781,210.0733184814453 511.3603820800781,153.9266815185547 564.7590026855469,136.576416015625 597.7611694335938,182" 
                        fill="transparent" 
                        stroke="red" 
                    />
                </a>
                <a href='/community-center'>
                    <polygon 
                        id="venue" 
                        points="711.323486328125,457.1947326660156 667.6197509765625,517.3478698730469 596.9054870605469,494.3714294433594 596.9054870605469,420.01806640625 667.6197509765625,397.0416259765625 711.323486328125,457.1947326660156" 
                        fill="transparent" 
                        stroke="red" 
                    />
                </a>
            </svg>
        </div>
    );
};

export default Locations;