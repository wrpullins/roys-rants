import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { LightTheme } from "./theme/themes.ts";
import { ThemeProvider } from "./theme/useTheme.tsx";
import { BrowserRouter } from "react-router-dom";

import "primereact/resources/primereact.min.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialTheme={LightTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
