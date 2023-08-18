import React from 'react';


const Cart =({meal}) => {
    return(
        <div>
            <h3>{meal.srtMeal}</h3>
            <img width={'250px'} src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
    );

};




export default Cart;