import { useState } from "react";

import "../styles.css";

export default function Card3 () {
  //const [info, setalgo] = useState(algo);

  //const funcion = () => {};

  return (
    <>                  
    <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="/mogami.jpg" alt="Card image cap"/> 
    <div class="card-body">
      <h5 class="card-title">Japanese Aircraft Carrying Cruiser Mogami</h5>
      <p class="card-text">Tamiya presents the unique Japanese Navy Aircraft Carrying Cruiser Mogami, which was able to carry eleven hydroplanes in the second half of the Pacific war.</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/taiho.jpg" alt="Card image cap"/> 
    <div class="card-body">
      <h5 class="card-title">Japanese Aircraft Carrier Taiho</h5>
      <p class="card-text">This is an assembly kit of the Taiho, an aircraft carrier which was completed in March 1944, near the end of WWII. Built with a new design philosophy, she was expected to be a mainstay of Japan's Mobile Fleet, but was sunk by submarine attack just 3 months into her service life..</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/yamato.jpg" alt="Card image cap"/> 
    <div class="card-body">
      <h5 class="card-title">Japanese Battleship Yamato</h5>
      <p class="card-text">A Japanese Navy battleship completed in December 1941 with a 64,000 ton displacement, nine 46cm guns which had a 41km firing range, and a host of other revolutionary features. </p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

    </>
    );
};