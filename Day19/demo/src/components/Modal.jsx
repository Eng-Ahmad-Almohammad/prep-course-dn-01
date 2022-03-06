import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import swal from 'sweetalert';


export default function RecipeModal({ recipe, show, handleClose, addToFavList }) {

  // Getting the required inf from the form
  function handelFormSubmit(e){
    e.preventDefault();
    let comment = e.target.comment.value;
    // To send a POST request to save the recipe in our database as favorite recipe
    addToFavList(recipe, comment);
  }

  async function addToFavList(recipe, comment){
    const url = `${process.env.REACT_APP_SERVER}/addFavRecipe`
    // This should match the required data in the server
    const data = {
      title : recipe.title,
      readyInMinutes : recipe.readyInMinutes,
      vegetarian : recipe.vegetarian,
      sourceUrl : recipe.sourceUrl, 
      image : recipe.image, 
      summary : recipe.summary, 
      instructions : recipe.instructions, 
      comment : comment
    }
    // Use Fetch to send POST request
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    swal("Favorite Recipe", "You added a new recipe", "success");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{recipe.instructions}</Modal.Body>
      <Form onSubmit={handelFormSubmit} style={{margin: "0 10px"}}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control name="comment" type="text" placeholder="Enter Comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      <Modal.Footer>
        
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
