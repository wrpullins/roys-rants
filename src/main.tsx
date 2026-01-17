import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { LightTheme } from "./theme/themes.ts";
import { ThemeProvider } from "./theme/useTheme.tsx";
import { BrowserRouter } from "react-router-dom";

import "primereact/resources/primereact.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialTheme={LightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
