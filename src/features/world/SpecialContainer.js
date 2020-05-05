import React from 'react';
import lightningGIF from './lightning.gif';
import lightningGIF3 from './lightning3.gif';

const SpecialContainer = props => {

    const { specialFire } = props;

    return (
        <div 
            className="special"
            style={{ 
                position: 'absolute',
                zIndex: 4,
                // background: 'repeating-linear-gradient(lawngreen, tomato, whitesmoke, tomato, slateblue)',
                background: `url('${lightningGIF3}')`,
                backgroundSize: 400,
                backgroundRepeat: 'no-repeat',
                // borderRadius: '30%',
                height: 450,
                width: '55%', 
                left: 100,
                top: 200,
                transform: 'translateX(100%)',
                display: specialFire ? 'block' : 'none' 
            }}>
        </div>
    );
};

export default SpecialContainer;
