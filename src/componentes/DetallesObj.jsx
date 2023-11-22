import React from 'react';
import { useState } from "react";
import "../styles.css";

export default function DetallesObj() {
 
  return (
    <>
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="/mogami.jpg" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">Item No: 31359</div>
                        <h1 class="display-5 fw-bolder">Mogami</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">$45.00</span>
                        </div>
                        <p class="lead">The light cruiser Mogami, lead ship of her class, possessed five triple 15.5cm gun positions and a 150,000 output that would rival even its famed cousin the Yamato - it was an ambitious attempt to shoehorn heavy cruiser armament into a slimline, lightweight hull. Later in her service life, in 1939, she was up-armed with 20.3cm guns and converted into a heavy cruiser before later joining the outbreak of war in the Pacific. The alterations to this versatile vessel didn't end there, however, and after sustaining heavy damage at the Battle of Midway in June 1942, Japanese navy planners took the chance to have her converted into an aircraft carrying cruiser while carrying out repairs. She finally met her end in the Battle of Leyte Gulf, October 1944. Direct hits to her bridge from U.S. aircraft were compounded by her colliding with the heavy cruiser Nachi, and the Japanese Navy was left with no choice other than to scuttle the Mogami, the task performed by the destroyer Akebono. Thus the Mogami sank, leaving just the memory of this ship of many faces. Now, she joins the Water Line Series for the first time in her light cruiser guise.</p>
                        <div class="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="number" value="1" style={{ maxWidth: '3rem' }} />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}