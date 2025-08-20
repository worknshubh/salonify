import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "../screens/home.jsx";
import Login_screen from "../screens/login.jsx";
import Signup_screen from "../screens/signup.jsx";
import Services from "../screens/services.jsx";
import Userservices from "../screens/userservices.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/userservices", element: <Userservices /> },
    ],
  },
  { path: "/login", element: <Login_screen></Login_screen> },
  { path: "/signup", element: <Signup_screen /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
