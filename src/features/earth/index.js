import React from 'react';
import earthPNG from './earth.png';

const Earth = props => {
    return (
        <div
            className='earth'
            style={{
                position: 'absolute',
                zIndex: 0,
                top: 200,
                height: '350px',
                width: '350px',
                backgroundImage: `url('${earthPNG}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                borderColor: props.shield === 10 ? 
                        'lawngreen' : 
                        props.shield < 6 ? 
                        'gold' : 
                        props.shield <  3? 
                        'red' :  
                        'red',
                borderStyle: 'double',
                borderWidth: 12
            }}>
            {props.children}
        </div>
    );
};

export default Earth;
