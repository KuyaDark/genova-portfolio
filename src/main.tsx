
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // <-- Import BrowserRouter
// import "./index.css";
// import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>  {/* <-- Wrap your App */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Kotsek from "../components/kotsek"; // <-- Correct path
import Cas from "../components/cas";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kotsek" element={<Kotsek />} />
        <Route path="/cas" element={<Cas/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

