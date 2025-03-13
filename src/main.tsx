import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Layout } from "./Layout/Layout.tsx";
import { MainPage } from "./components/Pages/MainPage/MainPage.tsx";
import { Order } from "./components/Pages/Order/Order.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/order",
        element: <Order />,
        children: [
          {
            path: "location",
            element: <div>location</div>,
          },
          {
            path: "model",
            element: <div>model</div>,
          },
          {
            path: "options",
            element: <div>options</div>,
          },
          {
            path: "summary",
            element: <div>summary</div>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
