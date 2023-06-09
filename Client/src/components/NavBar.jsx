import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button>Home</button>
      </Link>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>

      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
    </nav>
  );
};

export default NavBar;
