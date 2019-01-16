import React from 'react';
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        }).reduce((arr,el) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredientsArray.length === 0) {
            transformedIngredientsArray = <p>FIll THIS BURGER</p>
        }
        console.log(transformedIngredientsArray)
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredientsArray}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};      

export default burger;