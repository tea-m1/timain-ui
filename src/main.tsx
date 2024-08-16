import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Home} from "@/pages/home";
import {Community} from "@/pages/community";
import "../index.css";
import {Biodiversite} from "./pages/biodiversite/Biodiversite";
import {Plante} from "./pages/biodiversite/plante/Plante";
import {Animal} from "./pages/biodiversite/animal";
import AOS from "aos";
import Place from "./pages/biodiversite/place/Place";
import RegisterForm from "./pages/auth/register-form";
import LoginForm from "./pages/auth/login-form";

AOS.init({
  duration: 1000,
  once: true,
});

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/biodiversite",
    element: <Biodiversite />,
  },
  {
    path: "/biodiversite/animal",
    element: <Animal />,
  },
  {
    path: "/biodiversite/space",
    element: <Place />,
  },
  {
    path: "/biodiversite/plante",
    element: <Plante />,
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
