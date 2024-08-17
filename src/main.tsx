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
import RegisterForm from "./pages/auth/register-form";
import LoginForm from "./pages/auth/login-form";
import {TimainAdmin} from "./pages/admin";
import { withRole } from "./features/auth";
import { UserRole } from "./gen";

AOS.init({
  duration: 1000,
  once: true,
});

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  withRole({
    path: "/community",
    element: <Community />,
  }, [UserRole.USER]),
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
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  withRole({
    path: "/admin/*",
    element: <TimainAdmin />,
  }, [UserRole.ADMIN]),
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={ROUTER} />
    </QueryClientProvider>
  </React.StrictMode>
);
