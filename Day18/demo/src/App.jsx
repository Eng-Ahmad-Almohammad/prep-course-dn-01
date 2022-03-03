import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FavRecipes from "./components/FavRecipes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<FavRecipes />} />
    </Routes>
  );
}
