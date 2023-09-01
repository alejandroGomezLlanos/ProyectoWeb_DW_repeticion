import { useState } from "react";
import "../styles.css";

import BotonLogin from "../componentes/BotonLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="col-6 bg-light mx-auto text-center">
        <h1>Login</h1>
        <a href="url">don't have account? Create account</a>
        <hr></hr>
        <input type="text" placeholder="email" />
        <hr></hr>
        <input type="text" placeholder="password" />
        <hr></hr>
        <a href="url">Forgot password</a>
        <hr></hr>
        <BotonLogin botonLogin />
      </div>
        <img src="./uao.png" width={500} alt="error"></img>
    </>
  );
}
