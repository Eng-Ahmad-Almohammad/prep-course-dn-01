import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";
export default function Header() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/fav">Favorite</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
