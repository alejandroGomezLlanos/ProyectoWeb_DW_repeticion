import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import BotonLogin from "../componentes/BotonLogin";

export default function Login() {
  const navigate = useNavigate();
  const [correo, setEmail] = useState("");
  const [clave, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Realizar la petición GET para obtener usuarios
      const response = await axios.get("https://deploy-backend-final-web-production.up.railway.app/users");
      const users = response.data;

      // Verificar si el usuario con el correo proporcionado existe
      const user = users.find((user) => user.correo === correo);

      if (user) {
        // Verificar la contraseña utilizando bcrypt
        const isPasswordValid = await bcrypt.compare(clave, user.clave);

        if (isPasswordValid) {
          // Redirigir a la página deseada (por ejemplo, "/dashboard")
          navigate("/home");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <>
      <div className="col-6 bg-light mx-auto text-center">
        <h1>Login</h1>
        <a href="#/CreateAcount">Don't have an account? Create account</a>
        <hr></hr>
        <input type="text" placeholder="email" value={correo} onChange={(e) => setEmail(e.target.value)} />
        <hr></hr>
        <input type="password" placeholder="password" value={clave} onChange={(e) => setPassword(e.target.value)} />
        <hr></hr>
        <a href="url">Forgot password</a>
        <hr></hr>
        {/* Utiliza la función handleLogin para manejar el evento onClick del botón */}
        <BotonLogin botonLogin onClick={handleLogin}>
          Log In
        </BotonLogin>
      </div>
    </>
  );
}
