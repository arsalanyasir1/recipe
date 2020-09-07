import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {


  const APP_ID = "7e5e43b9";
  const APP_KEY = "92dfe07637aab2d891f2d0b1daee357a";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

    

  useEffect( () =>{

    getRecipes();

          }, []);


  const getRecipes = async () => {

    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id='+APP_ID+'&app_key='+APP_KEY+'');
    const data = await response.json();
    setRecipes(data.hits);
   }


  const updateSearch = e => {

    setSearch(e.target.value);


  }

  const getSearch = e =>{

    e.preventDefault();
    setQuery(search);
    setSearch("");

  }

 

  return(

    <div className='App'>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>

        </form>
        {recipes.map(recipe =>(
          <Recipe
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
       </div>
  )
}

export default App;
