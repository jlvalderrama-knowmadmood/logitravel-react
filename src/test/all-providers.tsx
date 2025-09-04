import { ItemsProvider } from "../context/items";
import { AddItemModalProvider } from "../context/add-item-modal";

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ItemsProvider>
      <AddItemModalProvider>{children}</AddItemModalProvider>
    </ItemsProvider>
  );
}

export default AllProviders;
