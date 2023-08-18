import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect,useState} from "react";
import axios from "axios";


const MealInfo = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setMeal(res.data.meals[0]))
    },[params.id])


const youtube = meal.strYoutube?.split('=')[1]

return (
    <div>
        <button onClick={() => navigat('/')}>Back</button>
        <h2>{meal.strMeal}</h2>
        <img width={'250px'} src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>

        <iframe width="420" height="315"
                title={meal.strMeal}
           // src={meal.strYoutube} frameborder="0" title={'video'} allow='autoplay; encrypted-media'
            src={`https://www.youtube.com/embed/${youtube}`}>
        </iframe>

        <p>

            <Link to={`/ingredient/${meal.strIngridient}`}>
                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`} />
            </Link>

        </p>
    </div>
);
};


export default MealInfo