import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import Template from "./templates/Template";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Template>
      <RouterProvider router={router} />
    </Template>
  </StrictMode>
);
