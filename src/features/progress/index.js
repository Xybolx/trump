import React from 'react';

const Progress = props => {

    const { score, shield, charge, special, children } = props;

    return (
        <div style={{ marginTop: 10, marginLeft: 20 }}>
            <span style={{ position: 'relative', top: 4 }} className='score'>SCORE {score}</span>
            &nbsp;<span className="fas fa-globe-americas" />&nbsp;
            <progress style={{ border: shield === 3 ? '1px solid lawngreen' : shield === 2 ? '1px solid gold' : '1px solid red'}} max={3} value={shield}>
                <div className="progress-bar">
                    <span style={{width: `${shield / 3 * 100}%`}} /> 
                </div>
            </progress>
            &nbsp;<span className='fas fa-bolt' />&nbsp;
            <progress style={{ border: charge === 3 ? '1px solid lawngreen' : charge === 2 ? '1px solid gold' : '1px solid red'}} max={3} value={charge} />
            &nbsp;<span className='fas fa-star' />&nbsp;
            <progress style={{ border: special >= 5 ? '1px solid lawngreen' : special >= 3 ? '1px solid gold' : special <= 2 ? '1px solid red' : '1px solid red'}} max={5} value={special}>
                <div className="progress-bar">
                    <span style={{width: `${special / 5 * 100}%`}} />
                </div>
            </progress>
            {children}
        </div>
    );
};

export default Progress;