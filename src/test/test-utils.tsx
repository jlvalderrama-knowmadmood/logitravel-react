import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import AllProviders from "./all-providers";

export function renderWithProviders(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: AllProviders, ...options });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
