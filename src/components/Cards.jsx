import Card from "./Card.jsx";
import styles from "../Styles/Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

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
              origin={origin}
              image={image}
              onClose={onClose}
              key={id}
            />
          );
        }
      )}
    </div>
  );
}
