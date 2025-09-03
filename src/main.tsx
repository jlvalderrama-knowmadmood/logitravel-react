import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ItemsProvider } from "./context/items/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </StrictMode>
);
