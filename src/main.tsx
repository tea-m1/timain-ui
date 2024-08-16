import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {HomePage} from "@/pages/home/HomePage";
import {Community} from "@/pages/community";
import "../index.css";
import {Biodiversite} from "./pages/biodiversite/Biodiversite";
import {PlantePage} from "./pages/biodiversite/plante/PlantePage";
import {AnimalPage} from "./pages/biodiversite/animal/AnimalPage";
import AOS from "aos";
import PlacePage from "./pages/biodiversite/place/PlacePage";

AOS.init({
  duration: 1000,
  once: true,
});

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/biodiversite",
    element: <PlacePage />,
  },
  {
    path: "/biodiversite/alive",
    element: <Biodiversite />,
  },
  {
    path: "/biodiversite/animal",
    element: <AnimalPage />,
  },
  {
    path: "/biodiversite/plante",
    element: <PlantePage />,
  },
  {
    path: "/Register",
    element: <RegisterForm/>,
  },
  {
    path: "/Login",
    element: <LoginForm/>,
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={ROUTER} />
    </QueryClientProvider>
  </React.StrictMode>
);
