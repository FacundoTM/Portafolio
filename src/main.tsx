<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "preline";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'preline'

window.addEventListener('load', () => {
  window.HSStaticMethods?.autoInit?.()
})
>>>>>>> f71830054a1a8c7ca8355c53c2e57ec4bf61cdd3

window.addEventListener("load", () => {
  window.HSStaticMethods?.autoInit?.();
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
