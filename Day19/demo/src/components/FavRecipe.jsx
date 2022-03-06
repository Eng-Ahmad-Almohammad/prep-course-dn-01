import { Card, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function FavRecipe({ recipe, getFavRecipe }) {
  function handelDelete(id) {
    //   Adding alert before delete
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        // if the user confirm deleteing it will delete from the database
        const url = `${process.env.REACT_APP_SERVER}/deleteFavRecipe/${id}`;
        const response = fetch(url, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
          // we recall the getFavRecipe to get the data from the server again after deleting and
          // it will rernder the component because it is modifying the state
          getFavRecipe();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title> Title: {recipe.title}</Card.Title>
        <Card.Title>Comment :{recipe.comment}</Card.Title>
        <Card.Text style={{ overflowY: "scroll", maxHeight: "100px" }}>
          {recipe.summary}
        </Card.Text>
        <Button onClick={() => handelDelete(recipe.id)} variant="primary">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
