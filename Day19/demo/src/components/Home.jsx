import { useState, useEffect } from "react";
import Header from "./Header";
import RecipesList from "./RecipesList"

export default function Home(){
    const [recipes, setRecipes] = useState([]);
    
    async function getData(){
        let response = await fetch(`${process.env.REACT_APP_SERVER}/recipes`);
        let data = await response.json();

        setRecipes(data);
            
    };

    useEffect(() => {
        getData();

    },[]);
    return(
        <>
        <h1>From Home Page</h1>
        <Header />
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", height:"100px"}}>
        {recipes && <RecipesList recipes={recipes}/>}
        </div>
        </>
    )
};