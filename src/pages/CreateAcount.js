import { useState } from "react";
import "../styles.css";

import BotonLogin from "../componentes/BotonLogin";

export default function CreateAcount() {
  return (
    <>
      <div className="col-6 bg-light mx-auto text-center">
        <h1>Pagina de Creacion cuenta</h1>
        <hr></hr>
        <input type="text" placeholder="correo electronico" />
        <hr></hr>
        <input type="text" placeholder="nombre usuario" />
        <hr></hr>
        <input type="text" placeholder="contraseña" />
        <hr></hr>
        <input type="text" placeholder="confirmar contraseña" />
        <hr></hr>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#">
            Usuario
          </a>
          <a class="dropdown-item" href="#">
            Abogado
          </a>
        </div>
        <BotonLogin botonLogin />
      </div>
    </>
  );
}
