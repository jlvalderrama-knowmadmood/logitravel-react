import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ItemsProvider } from "./context/items/";
import { AddItemModalProvider } from "./context/add-item-modal";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ItemsProvider>
      <AddItemModalProvider>
        <App />
      </AddItemModalProvider>
    </ItemsProvider>
  </StrictMode>
);
