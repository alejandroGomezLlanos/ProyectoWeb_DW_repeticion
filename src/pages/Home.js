import { useState } from "react";
import "../styles.css";

import Card from "../componentes/Card";
import TripleCard from "../pages/TripleCard";
import Barra from "../componentes/Barra";
import PiePagina from "../componentes/PiePagina";

export default function Home() {
  return (
    <>
    
<Barra/>

<main>

<Card/>

</main>



<PiePagina />


    </>
  );
}