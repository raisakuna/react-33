import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing";
import "./assets/css/main.css";
import { Flowbite } from "flowbite-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite>
      <LandingPage />
    </Flowbite>
  </StrictMode>
);
