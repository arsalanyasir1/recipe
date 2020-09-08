import React from "react";
import style from './recipe.module.css'


const Recipe = ({title,calories,image,ingredients}) => {

    
    return(
        <div className={style.recipe} >
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(         
                    <li >{ingredient.text}</li> ///arsalan ye ingredients key value pair mein honay chahye, ingredient ke
                                                // key app.js mein access ho ge. list k leay key access krni hai aur list 
                                                // ingredients ke hai. ab ye pta nae lg raha k ye ingredients kahan se 
                                                // a raey. unko key value pair mein krna, phr ho ga ye                          
              
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
            </div>
    );

};



export default Recipe;