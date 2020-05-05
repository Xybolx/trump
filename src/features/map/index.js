import React from 'react';
import background from './stars.jpg';

function Map(props) {
  return (
    <div
      style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          backgroundImage: `url('${background}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '4px solid grey',
          overflow: 'hidden',
      }}>
        {props.children}
    </div>
  );
};

export default Map;