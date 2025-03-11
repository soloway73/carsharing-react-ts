import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./components/layout/MainPage/MainPage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>error</div>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
