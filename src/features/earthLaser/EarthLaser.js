import React, { forwardRef, useCallback, useState } from 'react';
import { MAP_WIDTH, EARTH_LASER_WIDTH } from '../../config/constants';
import useEventListener from '../../hooks/useEventListener';
import useInterval from '../../hooks/useInterval';
import specialMP3 from '../laser/special.mp3';

const EarthLaser = forwardRef((props, earthLaser) => {

    const { charge, setCharge, special, setSpecial, handleSpecialFire } = props;

    const [isFlying, setIsFlying] = useState(false);

    const [visibility, setVisibility] = useState(false);
    
    const [position, setPosition] = useState(0);

    // function handling laser fire
    const handleEarthLaserFire = useCallback(() => {
        if (special >= 5) {
            const specialSound = new Audio(specialMP3);
            specialSound.playbackRate = .85;
            specialSound.play()
                .then(() => setCharge(0))
                .then(() => setVisibility('visible'))
                .then(() => setIsFlying(true))
                .then(() => handleSpecialFire())
                .then(() => setSpecial(0))
                .catch(err => console.log(err));
        }
        
    }, [setCharge, setIsFlying, setVisibility, handleSpecialFire, special, setSpecial]);

    const handleEarthLaserReset = () => {
        setPosition(0);
        setIsFlying(false);
        setVisibility('hidden');
    };

    // useCallback handler
    const handleKeyDown = useCallback(({ key }) => {
        switch(key) {
            case 'b':
                return handleEarthLaserFire();
            default:
                console.log(key);
        }
    }, [handleEarthLaserFire]);

    // useCallback handler
    const handleTouch = useCallback(() => {
            return handleEarthLaserFire();
    }, [handleEarthLaserFire]);
    
    // custom hook that adds an event listener and cleans up after itself 
    useEventListener('keydown', handleKeyDown, document);

    // custom hook that adds an event listener and cleans up after itself 
    useEventListener('touchend', handleTouch, document);

    // custom hook that sets interval and cleans up after itself
    useInterval(() => {
        const mapBounds = MAP_WIDTH - EARTH_LASER_WIDTH;
        const observingMapBounds = position >= 0 && position <= mapBounds;
        switch (true) {
            case observingMapBounds:
                setPosition(position => position + EARTH_LASER_WIDTH);
                break;
            default:
                handleEarthLaserReset();
        }
    }, isFlying ? 30 : null);

    return (
            <div
                id='laser'
                className='laser'
                ref={earthLaser}
                style={{
                    position: 'relative',
                    left: position,
                    top: 70,
                    visibility: visibility,
                    background: 'repeating-linear-gradient(lawngreen, tomato, whitesmoke, tomato, slateblue)',
                    border: '1px solid dodgerblue',
                    borderRadius: '20%',
                    height: '100%',
                    width: EARTH_LASER_WIDTH,
                }}>
        </div>
    );
});

export default EarthLaser;
