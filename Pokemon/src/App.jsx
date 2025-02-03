import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import Pokemons from "./pages/Pokemons";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </>
  );
};

export default App;
