import React, {useState} from 'react';
import Header from "../components/Header";

const HomePage = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
            .then(res => setMeals(res.meals))
    }, [])
    return (
        <div className={'container'}>
            <Header/>
            <h2>Home page</h2>
            {
                meals.map(meal=>{
                    return (
                        <div key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img width={'150px'} src={meal.strMealThymb} alt={meal.strMeal} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HomePage