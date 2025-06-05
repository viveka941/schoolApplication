import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

import About from "./pages/About";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";

import Register from "./pages/UserSide/Login";
import Cashier from "./pages/UserSide/SchoolManagement/Cashier";
import AllTeachers from "./pages/UserSide/SchoolManagement/AllTeacher";
import ClassWiseData from "./pages/UserSide/SchoolManagement/ClassWiseData";

function App() {
  const appRoute = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/compus", element: <Campus /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Register /> },
    { path: "/cashier", element: <Cashier /> },
    { path: "/allTeacher", element: <AllTeachers /> },
    { path: "/ClassWiseData",element:<ClassWiseData/> },
  ]);

  return (
    <>
      <RouterProvider router={appRoute}></RouterProvider>;
    </>
  );
}

export default App;
