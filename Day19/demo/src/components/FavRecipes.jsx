import { useState, useEffect } from "react";
import Header from "./Header";
import FavRecipe from "./FavRecipe";

export default function FavRecipes() {
  const [favRecipes, setFavRecipes] = useState([]);

  async function getFavRecipe() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/favRecipes`);
    const data = await response.json();

    setFavRecipes(data);
  }

  useEffect(() => {
    getFavRecipe();
  }, []);

  console.log(favRecipes);
  return (
    <>
      <h1>From FavRecipes Page</h1>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/* if there is data in  favRecipes render the component */}
        {favRecipes &&
          favRecipes.map((recipe) => {
            return (
              <FavRecipe
                key={recipe.id}
                getFavRecipe={getFavRecipe}
                recipe={recipe}
              />
            );
          })}
      </div>
    </>
  );
}
