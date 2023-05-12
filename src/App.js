import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Forms from "./components/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation(); // EJERCICIO 2 de FORMS

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "joseignacio2534@gmail.com"; //DE LA LINEA 15 a 25 lo traje del README, me lo pedia ahi.
  const PASSWORD = "felix_2021";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      {
        // como se lee: si estoy en un lugar distinto a '/' entonces mostrame el navBar.
        // pathname me lo importe de useLocation. Ver linea 14. Esto viene del ejercicio 2 de Forms.
      }
      <Routes>
        {
          //element nos va a estar diciendo a quien vamos a renderizar
        }
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Forms login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
