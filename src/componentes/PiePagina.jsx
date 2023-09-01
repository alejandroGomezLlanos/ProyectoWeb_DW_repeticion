import { useState } from "react";

import "../styles.css";

export default function PiePagina() {

  return (
    <>
    <footer class="text-body-secondary py-5">
    <div class="container">
        <p class="float-end mb-1">
        <a href="#">Back to top</a>
        </p>
        <p class="mb-1">The Waterline Series is cooperatively produced by the three member companies of the Shizuoka Plastic Model Manufacturer's Association: Tamiya, Inc., Aoshima, Ltd., and Hasegawa Corp. Each of these companies offer many other products in their line-ups, so please visit their respective homepages to check them out.</p>
        <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p>
    </div>
    </footer>
    </>
  );
};