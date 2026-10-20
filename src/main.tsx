import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { ThemeProvider } from "./theme/useTheme.tsx";
import { BrowserRouter } from "react-router-dom";
import { getVisitorKey } from "./utils/visitorKey";

import "primereact/resources/primereact.min.css";
import { getStoredTheme } from "./theme/storedTheme.ts";

const queryClient = new QueryClient();
getVisitorKey();

const theme = getStoredTheme()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider initialTheme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
