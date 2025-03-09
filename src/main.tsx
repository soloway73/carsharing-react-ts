import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./components/layout/MainPage/MainPage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>error</div>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
