import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

import classes from './Burger.module.css';

const funcName = (props) => {
    ////console.log(props, 'This is PropsObject ------------------- 1');
    //console.log(Object.keys(props.ingredients),'Converted object to array; Object.keys---------------2'); 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //console.log(igKey, 'map key -------------------3');
            //console.log(props.ingredients[igKey], 'Spread Operator------------------4');
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                //console.log(i,'<---------VALUE   ',igKey + i, '--------------------5');
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        //console.log(transformedIngredients);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default funcName;