import { useState } from "react";
import "../styles.css";

export default function Card() {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src="/mogami.jpg" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Tamiya presents the unique Japanese Navy Aircraft Carrying Cruiser Mogami, which was able 
            to carry eleven hydroplanes in the second half of the Pacific war.
          </p>
          <a href="#/Comprar" class="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
}
