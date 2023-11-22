import { useState } from "react";
import "../styles.css";
import axios from "axios";
import bcrypt from "bcryptjs";

import BotonLogin from "../componentes/BotonLogin";

export default function CreateAccount() {
  const [correo, setEmail] = useState("");
  const [nombre, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    // Verifica que los campos no est�n vac�os
    if (!correo || !nombre || !clave || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Verificar el formato del correo
    if (!correo.includes("@") || !correo.includes(".com")) {
      alert("Correo electr�nico no v�lido");
      return;
    }

    // Verificar que las contrase�as coincidan
    if (clave !== confirmPassword) {
      alert("Las contrase�as no coinciden");
      return;
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(clave, saltRounds);

      const userData = {
        nombre,
        correo,
        clave: hashedPassword,
      };

      console.log("Datos a enviar:", userData);

      const response = await axios.post("https://deploy-backend-final-web-production.up.railway.app/users", userData);

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al crear la cuenta", error);
    }
  };

  return (
    <>
      <div className="col-6 bg-light mx-auto text-center">
        <h1>Pagina de Creaci�n de Cuenta</h1>
        <hr></hr>
        <input
          type="text"
          placeholder="Correo electr�nico"
          value={correo}
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr></hr>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={nombre}
          onChange={(e) => setUsername(e.target.value)}
        />
        <hr></hr>
        <input
          type="password"
          placeholder="Contrase�a"
          value={clave}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr></hr>
        <input
          type="password"
          placeholder="Confirmar contrase�a"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <hr></hr>
        {/* Utiliza la funci�n handleSignUp para manejar el evento onClick del bot�n */}
        <BotonLogin botonLogin onClick={handleSignUp}>
          Crear Cuenta
        </BotonLogin>
      </div>
    </>
  );
}
