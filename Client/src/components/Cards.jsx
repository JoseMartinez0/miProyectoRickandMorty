import Card from "./Card.jsx";
import styles from "../Styles/Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.container}>
      {characters.map(
        ({ name, status, gender, origin, image, id, species }) => {
          return (
            <Card
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
              key={id}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
