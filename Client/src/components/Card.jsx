import styles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍"} </button>

      <button
        className={styles.button}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.nombre}>{name}</h2>
      </Link>

      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>

      <img className={styles.imagen} src={image} alt="" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    //CHARACTER es un objeto y viene de addFav linea 25

    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
