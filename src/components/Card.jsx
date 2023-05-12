import styles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        image,
        onClose,
      });
    }
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
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      //CHARACTER es un objeto y viene de addFav linea 25
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
