import React from 'react';
import { Link } from 'react-router-dom';
import background from '../features/map/stars.jpg';
import earthPNG from '../features/earth/earth.png';
import trumpKissPNG from '../features/alert/trump-kiss.png';

import { MAP_HEIGHT, MAP_WIDTH } from '../config/constants';

const Home = () => {
    return (
        <div 
            style={{
                position: 'relative',
                width: MAP_WIDTH,
                height: MAP_HEIGHT,
                margin: '10px auto',
                backgroundImage: `url('${background}'), url('${earthPNG}')`,
                backgroundBlendMode: 'difference',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover, 500px',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                border: '4px solid grey',
                textAlign: 'center'
            }}>
            <div 
                style={{ 
                    position: 'relative', 
                    top: '20%' 
                }}>
                <img style={{ position: 'relative', mixBlendMode: 'overlay' }} height='300px' width='300px' src={trumpKissPNG} alt='' />
                <h2>Trump Earth Defense</h2>
                <h5>Ready to make the Earth great again?</h5>
                <Link exact to='/game'>Yes!</Link>
            </div>
        </div>
    );
};

export default Home;
