import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

import StarRating from "./components/StarRating.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
  </React.StrictMode>
);
