import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function RecipeModal({ recipe, show, handleClose }) {


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
