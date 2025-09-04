# Prueba Técnica – React + TypeScript

## ¿De qué trata la aplicación?

Aplicación **React + TypeScript** que gestiona una lista simple de elementos. Permite **añadir** ítems mediante un **modal**, **seleccionar** varios con click, **eliminar** los seleccionados, **eliminar uno** con doble clic y **deshacer** la última operación gracias a un **histórico (undo)**. Es una prueba técnica enfocada en flujos de UI, estado predecible, accesibilidad y organización del código.

### Funcionalidad principal

- **Añadir**
  - Botón “Add” abre el modal.
  - El formulario valida que el campo no esté vacío (el botón “Add” del modal se habilita al escribir).
  - Enviar (Enter o click) inserta el ítem y cierra el modal.
- **Listar**
  - La lista muestra todos los ítems; si no hay, se muestra un **empty state** (“No items yet”).
- **Seleccionar**
  - Click sobre un elemento alterna su selección (multi-selección).
  - La acción **Delete** se habilita solo si hay selección.
- **Eliminar**
  - **Delete** borra todos los seleccionados.
  - **Doble clic** sobre un elemento borra solo ese ítem.
- **Deshacer (Undo)**
  - Cada operación que modifica la lista guarda un **snapshot** previo en el historial.
  - El botón de **Undo** restaura el último estado y se deshabilita cuando no hay histórico.

### Detalles de diseño relevantes

- **Estado**: contexto específico para la lista (items, selección, historial) y otro para la visibilidad del modal.
- **UX**: acciones deshabilitadas cuando no aplican (Add del formulario, Delete sin selección, Undo sin histórico).
- **Sin backend**: toda la lógica es en cliente.

## 📁 Estructura del proyecto

La solución está organizada para que el **código de UI** sea fácil de leer, **testeable** y **escalable**. A grandes rasgos:

- **Componentes** separados en **contenedor** y **vista**:
  - `*View.tsx` = **vista** (markup + estilos + pequeños handlers locales).
  - El archivo **sin sufijo** (p. ej. `AddItemModal.tsx`) = **contenedor** (orquesta estado/contexts y pasa callbacks a la vista).
  - Estilos con SCSS.
- Diferencio **helpers** de **utils**:
  - **helpers** → funciones que **tocan o generan JSX/HTML** (p. ej. calcular clases, construir listas de `<li>`, etc.).
  - **utils** → funciones **puras**, sin JSX, centradas en lógica de negocio o cálculos.
- **Context** por dominio (`items` y `add-item-modal`) con reducer/actions/hooks/tipos separados.
- **Tests** cerca del código (unitarios) y pruebas de flujo a nivel `App` con un **custom render** que envuelve los _providers_.

### 🔹 Contenedores vs. Vistas

- **Contenedor**: conecta con **contextos**, crea **callbacks** (p. ej. `handleSubmit`, `handleDelete`), deriva flags (`canUndo`, `canDelete`) y los pasa a la vista. No contiene markup complejo.
- **Vista**: solo **markup y estilos**; recibe props **controladas** (datos y callbacks). Esto facilita **testing unitario** (se puede mockear la vista o los hooks) y el **reuso**.

### 🔹 Helpers vs. Utils

- **Helpers** (en `list-helpers/`): acoplados al render. Ejemplos:
  - `calculate-list-item-extra-class.ts` → calcula clases dependiendo del estado/selección.
  - funciones que devuelven listas de elementos JSX a partir de datos.
- **Utils** (en `list-utils/`): **pura lógica** sin JSX. Ejemplos:
  - `check-is-item-selected.ts` → determina si un índice está seleccionado.
  - transformaciones/cálculos que pueden testearse sin React.

### 🔹 Context y estado

- Dos contextos independientes:
  - **`items`**: gestiona `items`, `selected` y `history` con **reducer**; expone `addItem`, `deleteOne`, `deleteSelected`, `toggleSelect`, `clearSelection`, `undo` y derivadas (`canUndo`, `canDelete`).
  - **`add-item-modal`**: estado de apertura/cierre del modal.
  - Cada contexto expone hooks para acceder específicamente a sus acciones, a su estado o a ambos (p. ej. `useItemsState` devuelve `items`, `selected`, `canUndo` y `canDelete`; `useItemsActions` devuelve `addItem`, `deleteItem`, `deleteSelected`, `toggleSelected`, `clearSelection` y `undo`; `useItems` devuelve todo). Esta separación es útil por si en un archivo solamente se necesita utilizar el estado, las acciones o ambos.
- **Split de context** (_state/actions_) para minimizar _re-renders_.
- **Barrel files** (`index.ts`) para mantener una API clara de cada carpeta.

### 🔹 Testing

- **Unit tests** junto a helpers/utils y componentes específicos.
- **Tests de flujo** en `App.test.tsx` usando `renderWithProviders` (custom render que envuelve los providers reales).
- Queries accesibles por **rol/nombre** (p. ej. `getByRole('button', { name: /add/i })`) y _scoping_ con `within()` para desambiguar botones con el mismo texto.

### 🔹 Estilos

- **SCSS** con tokens en `styles/_tokens.scss` y base global en `styles/base.scss`.
- Estilos por componente en ficheros `*-styles.scss` adyacentes a las vistas.

> Con esta estructura, el **dominio** (estado y acciones) queda aislado, la **presentación** es sustituible/testeable, y la **navegación** del repo es inmediata para alguien nuevo en el proyecto.
