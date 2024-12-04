import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing";
import Auth from "./pages/auth";
import "./assets/css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
    <Auth.LoginPage />
    <LandingPage />
  </StrictMode>
);
