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
import TeacherProfile from "./pages/UserSide/SchoolManagement/TeacherProfile";
import StudentDashboard from "./pages/UserSide/SchoolManagement/StudentDashboard";
import RegisterUser from "./pages/UserSide/SchoolManagement/RegisterUser";
import AddStudentDetails from "./pages/UserSide/SchoolManagement/AddStudentDetails";
import AddTeacher from "./pages/UserSide/SchoolManagement/AddTeacher";

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
    {path:"/addUser",element:<RegisterUser/>},
    {path:"/addStudentDetails/:userId" ,element:<AddStudentDetails/>},
    {path:"/addTeacherDetails/:userId",element:<AddTeacher/>},
    {path:"/addStaffDetails/:userId",element:<AddStudentDetails/>},
    {path:"/teacherProfile",element:<TeacherProfile/>},
    {path:"/studentProfile",element:<StudentDashboard/>}
  ]);

  return (
    <>
      <RouterProvider router={appRoute}></RouterProvider>;
    </>
  );
}

export default App;
