import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

import About from "./pages/About";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";

function App() {
  const appRoute = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/compus", element: <Campus /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <>
      <RouterProvider router={appRoute}></RouterProvider>;
    </>
  );
}

export default App;
