import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RecipeModal from "./Modal"
import {useState} from 'react'

let RecipesList = ({recipes}) => {
    const [chosenRecipe, setChosenRecipe] = useState()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handelChosenRecipe(recipe){
    setChosenRecipe(recipe);
    handleShow();
  };

  
    return(
        <>
        {
            recipes.map(recipe => {
                return(
                    
                    <div key={recipe.id}>
                    <Card   style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title> Title: {recipe.title}</Card.Title>
                      <Card.Title>It will be ready in:{recipe.readyInMinutes}</Card.Title>
                      <Card.Text style={{overflowY: "scroll", maxHeight:"100px"}}>
                        {recipe.summary}
                      </Card.Text>
                      <Button variant="primary" onClick={() => handelChosenRecipe(recipe)}>Add to Fav</Button>
                    </Card.Body>
                  </Card>

                   
                    </div>
                )
            })
            
        }
        {chosenRecipe && <RecipeModal recipe={chosenRecipe} show={show} handleClose={handleClose}/>}
        </>
    )
};

export default RecipesList;