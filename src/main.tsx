import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "preline";

declare global {
  interface Window {
    HS?: {
      init?: () => void;
      [key: string]: any;
    };
  }
}

useEffect(() => {
  document.addEventListener("DOMContentLoaded", function () {
    window.HS?.init?.();
  });
}, []);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
