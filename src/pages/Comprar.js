import React from 'react';
import { useState } from "react";
import "../styles.css";
import Barra from "../componentes/Barra";
import DetallesObj from "../componentes/DetallesObj";
import PiePagina from "../componentes/PiePagina";

export default function Comprar() {
 
  return (
    <>
        <Barra />
        <DetallesObj />
        <PiePagina />
    </>
  );
}