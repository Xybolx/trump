import React from 'react';

const GamepadConnected = props => {

    const { connected } = props;

    return (
        <div className="badge text-left" style={{ height: 35 }}>
            <span style={{ position: 'absolute', fontSize: "small" }}><i className="fas fa-gamepad fa-fw fa-2x" /> {connected ? "Connected" : "Not Connected"}</span> 
        </div>
    );
};

export default GamepadConnected;
