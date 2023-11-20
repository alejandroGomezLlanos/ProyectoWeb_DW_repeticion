// Dentro de BotonLogin.js (o donde tengas definido el componente BotonLogin)
import React from "react";
import { Link } from "react-router-dom";

const BotonLogin = ({ botonLogin, onClick }) => {
  return (
    <Link to="/login">
    <button type="button" className={`btn ${botonLogin ? "btn-secondary" : "btn-primary"}`} onClick={onClick}>
      {botonLogin ? "Aceptar" : "Texto2"}
    </button>
    </Link>
  );
};

export default BotonLogin;


//<button type="button" class="btn btn-secondary">
