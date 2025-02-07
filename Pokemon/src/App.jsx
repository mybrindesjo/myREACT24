import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import Pokemons from "./pages/Pokemons";
=======
import PokemonsListSwr from "./pages/PokemonsListSwr";
>>>>>>> 04e3294640f0568ac9ebfdd4ef7c9cf247a834db

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/pokemons" element={<Pokemons />} />
=======
        <Route path="/pokemons" element={<PokemonsListSwr />} />
>>>>>>> 04e3294640f0568ac9ebfdd4ef7c9cf247a834db
      </Routes>
    </>
  );
};

export default App;
