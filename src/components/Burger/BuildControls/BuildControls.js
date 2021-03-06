import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    return (
        <div className='BuildControls'>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
            disabled={props.disabled[ctrl.type]} 
            removed = {() => props.ingredientRemoved(ctrl.type)}
            added={() => props.ingredientAdded(ctrl.type)} 
            key={ctrl.label} 
            label={ctrl.label}/>
        ))}
        <button 
        className="OrderButton" 
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};  

export default buildControls;