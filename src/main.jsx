import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import { Flowbite } from "flowbite-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Routing from "./config/routing.config";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite>
      <Routing />
    </Flowbite>
  </StrictMode>
);
