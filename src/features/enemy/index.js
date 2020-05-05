import React, { useEffect, useCallback, useState, useRef } from 'react';
import useInterval from '../../hooks/useInterval';
import trumpSprite from './trump.png';
import trumpKiss from '../alert/trump-kiss.png';
import trumpSuprise from './suprise.png';
import trumpPuke from './puke.png';
import splodeGIF from './splode.gif';
import splodeMP3 from './splode.mp3';

const Enemy = ({ setScore, setShield, setSpecial, specialFire, setSpecialFire, laser, isFlying, handleLaserReset, setAlert, children }) => {

    const enemy = useRef();

    const [destroyed, setDestroyed] = useState(false);

    const [enemyPosition, setEnemyPosition] = useState(1300);

    const [background, setBackground] = useState('');

    useEffect(() => {
      const backgrounds = [trumpKiss, trumpSprite, trumpSuprise, trumpPuke];
      const indexOfBackground = Math.floor(Math.random() * backgrounds.length);
      const randomBackground = backgrounds[indexOfBackground];
      setBackground(randomBackground);
    }, []);

    useEffect(() => {

        const rect1 = laser.current.getBoundingClientRect();
        const rect2 = enemy.current.getBoundingClientRect();
    
        const enemyIntersect = 
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y;
    
        if (enemyIntersect && isFlying) {
          const splodeSound = new Audio(splodeMP3);
          splodeSound.play();
          setDestroyed(true);
          handleLaserReset();
          setSpecial(special => special + 1)
        }
      }, [handleLaserReset, laser, isFlying, setSpecial]);

    const handleEnemyReset = useCallback(() => {
      const backgrounds = [trumpKiss, trumpSprite, trumpSuprise, trumpPuke];
      const indexOfBackground = Math.floor(Math.random() * backgrounds.length);
      const randomBackground = backgrounds[indexOfBackground];
      if (destroyed) {
          setScore(score => score + 100);
          setDestroyed(false);
          setSpecialFire(false);
        } else if (!destroyed) {
          setShield(shield => shield - 1);
        }
        setEnemyPosition(1300);
        setBackground(randomBackground);
      }, [destroyed, setScore, setShield, setSpecialFire]);

      const handleSpecialReset = useCallback(() => {
        const splodeSound = new Audio(splodeMP3);
          splodeSound.volume = .50;
          splodeSound.play();
          setSpecial(0);
          setDestroyed(true);
      }, [setSpecial]);

    useEffect(() => {

        if (destroyed) {
          const timer = setTimeout(handleEnemyReset, 500);
          return () => {
            clearTimeout(timer);
          }
        }
      }, [destroyed, handleEnemyReset]);

      useEffect(() => {

        if (specialFire) {
          const timer = setTimeout(handleSpecialReset, 1200);
          return () => {
            clearTimeout(timer);
          }
        }
      }, [handleSpecialReset, specialFire]);

      useInterval(() => {
        const observingMapBounds = enemyPosition > 0;
        switch (true) {
            case observingMapBounds:
                setEnemyPosition(enemyPosition => enemyPosition - 8);
                break;
            case !observingMapBounds:
                handleEnemyReset();
                break;
            default:
                console.log(destroyed);
        }
    }, !destroyed ? 250 : null);

    return (
            <div
                id='enemy'
                className="enemy"
                ref={enemy}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    left: enemyPosition,
                    height: '150px',
                    width: '150px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundImage: !destroyed ? `url('${background}')` : `url('${splodeGIF}')`
                }}>
                {children}
        </div>
    );
};

export default Enemy;