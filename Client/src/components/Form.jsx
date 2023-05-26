import { useState } from "react";
import validation from "./validation";

const Forms = ({ login }) => {
  //ejercicio 3 de forms
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  //EJERCICIO 6
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form>
        <div>
          {
            // LES PUSE LOS DIV PARA DARLE ESTILOS}
            //LABEL: htmlForm es la asociacion que tengo con el input, en este caso el email.
          }
          <label htmlFor="email" style={{ color: "green" }}>
            Email:
          </label>
          <input
            onChange={handleChange}
            value={userData.email} //LE PUSE VAULE PARA BINDEARLO
            type="email"
            name="email"
            placeholder="         ingrese su mail"
          />
          {
            //TERNARIOS: validando el input
          }
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="password" style={{ color: "green" }}>
            Password:
          </label>
          <input
            onChange={handleChange}
            value={userData.password}
            type="password"
            name="password"
          />
          {
            //TERNARIO: VALIDANDO EL INPUT.
          }
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>
        <br />
        <button onClick={handleSubmit} type="submit">
          SUBMIT
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Forms;
