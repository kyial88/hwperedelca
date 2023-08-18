import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";



const  ingredientPage = () => {
    const [names,setName]= useState()
    const {name} = useParams();
    const navigate= useNavigate();

    useEffect(() =>{
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setName(res.data.name[0]))
    },[params.id])


    return (
        <div>
            <h4>Ingredient page</h4>
        </div>
    )
}

export default IngredientPage;