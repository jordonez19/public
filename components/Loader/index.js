import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Preloader = () => {
  return (
    <section class="dots-container w-100 vh-100">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </section>
  );
};

export default Preloader;
