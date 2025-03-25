import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout/Layout.tsx";
import { MainPage } from "./components/Pages/MainPage/MainPage.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { Order } from "./components/Pages/Order/Order.tsx";
import { Location } from "./components/Pages/Order/Location/Location.tsx";
import { Model } from "./components/Pages/Order/Model/Model.tsx";
import { Options } from "./components/Pages/Order/Options/Options.tsx";
import { Summary } from "./components/Pages/Order/Summary/Summary.tsx";

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
        element: <Navigate to="/order/location" replace />,
      },
      {
        path: "/order/*",
        element: <Order />,
        children: [
          {
            path: "location",
            element: <Location />,
          },
          {
            path: "model",
            element: <Model />,
          },
          {
            path: "options",
            element: <Options />,
          },
          {
            path: "summary",
            element: <Summary />,
          },
          {
            path: "summary/success",
            element: <Summary />,
          },
          {
            path: "*",
            element: <Navigate to="/order/location" replace />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
