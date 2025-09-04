import AddItemModal from "./components/AddItemModal";
import ItemListPanel from "./components/ItemListPanel";

import "./app-styles.scss";

function App() {
  return (
    <main>
      <ItemListPanel />
      <AddItemModal />
    </main>
  );
}

export default App;
