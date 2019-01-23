import React from 'react';
import burgerlogo from '../../assets/Images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={burgerlogo} alt="MyBurger" />
        </div>
    );
};

export default logo;