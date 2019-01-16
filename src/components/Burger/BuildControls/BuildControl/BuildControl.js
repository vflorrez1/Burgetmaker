import React from 'react';
import './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='BuildControlLabel'>{props.label}</div>
            <button className='BuildControlLess'>Less</button>
            <button className='BuildControlMore'>More</button>
        </div>
    );
};

export default buildControl;