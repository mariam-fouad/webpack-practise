import React from 'react';
import classes from './PizzaImage.css';

import PizzaImge from '../assets/pizza.jpg';

const PizzaImage = (props)=>{
    return (
        <div className={classes.PizzaImgWrapper}>
            <img src={PizzaImge} alt='Pizza'/>
        </div>
    )
}

export default PizzaImage;