import React, { useState, useRef } from 'react';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';
import useGamepad from '../../hooks/useGamepad';
import Player from '../player';
import Map from '../map';
import Earth from '../earth';
import Progress from '../progress';
import Alert from '../alert';
import Enemy from '../enemy';
import Laser from '../laser';
import SpecialContainer from './SpecialContainer';

const World = () => {

  // xbox gamepad
  const { gamepad, gamepadConnected } = useGamepad();

  // laser state
  const [isFlying, setIsFlying] = useState(false);

  const [visibility, setVisibility] = useState('hidden');

  const [position, setPosition] = useState(0);

  const [shield, setShield] = useState(3);

  const [charge, setCharge] = useState(3);

  const [special, setSpecial] = useState(0);

  const [specialFire, setSpecialFire] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [score, setScore] = useState(0);

  const laser = useRef();

  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  });

  const handleSpecialFire = () => {
    setAlert({
      isOpen: true,
    });
    setSpecialFire(true);
};

  const handleLaserReset = () => {
    setPosition(0);
    setIsFlying(false);
    setVisibility('hidden');
};

  return (
    <div 
      style={{
        position: 'relative',
        width: `${MAP_WIDTH}px`,
        height: `${MAP_HEIGHT}px`,
        margin: '10px 20px auto',
      }}>
        <Map>
          <Progress 
            shield={shield} 
            charge={charge} 
            special={special}
            score={score}>
            {gamepadConnected}
            {gamepad}
            <Alert alert={alert} setAlert={setAlert} />
          </Progress>
          <Player>
              <Laser 
                ref={laser}
                charge={charge} 
                setCharge={setCharge}
                isFlying={isFlying}
                setIsFlying={setIsFlying}
                visibility={visibility} 
                setVisibility={setVisibility} 
                position={position}
                setPosition={setPosition}
                special={special}
                setSpecial={setSpecial}
                handleSpecialFire={handleSpecialFire}
              />
            </Player>
            <SpecialContainer specialFire={specialFire} />
            <Enemy laser={laser} setAlert={setAlert} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setScore={setScore} setShield={setShield} setSpecial={setSpecial} />
            <Enemy laser={laser} setAlert={setAlert} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setScore={setScore} setShield={setShield} setSpecial={setSpecial} />
            <Enemy laser={laser} setAlert={setAlert} specialFire={specialFire} setSpecialFire={setSpecialFire} isFlying={isFlying} handleLaserReset={handleLaserReset} setScore={setScore} setShield={setShield} setSpecial={setSpecial} />
          <Earth shield={shield} />
        </Map>
    </div>
  );
};

export default World;