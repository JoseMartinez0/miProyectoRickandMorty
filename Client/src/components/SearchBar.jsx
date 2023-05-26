import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
};
//entre las llaves tengo que tener una función. En este caso una arrow function que ejecuta a la función onSearch.
// O sea cuando nosotros hagamos Click va a ejecutar la funcion que ejecuta onSearch.
export default SearchBar;
