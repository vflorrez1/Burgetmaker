import React from 'react';
import './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='BuildControlLabel'>{props.label}</div>
            <button className='BuildControlLess' disabled={props.disabled} onClick={props.removed}>Less</button>
            <button className='BuildControlMore' onClick={props.added}>More</button>
        </div>
    );
};

export default buildControl;