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
import Paragliding from "./pages/UserSide/SchoolManagement/Paragliding";
import TimeTableForm from "./pages/UserSide/TeacherSide/TimeTableForm";
import { AllDataProvider } from "./AllData/AllData";
import ShowTimeTable from "./pages/UserSide/TeacherSide/ShowTimeTable";
import NewClass from "./pages/UserSide/SchoolManagement/NewClass";
import Attendence from "./pages/UserSide/TeacherSide/Attendence";
import AttendenceDetails from "./pages/UserSide/Student/AttendenceDetails";
import EventForm from "./pages/UserSide/TeacherSide/EventForm";
import ExamForm from "./pages/UserSide/SchoolManagement/ExamForm";
import ExamTimeTable from "./pages/UserSide/SchoolManagement/ExamTimeTable";
import ResultData from "./pages/UserSide/SchoolManagement/ResultData";

function App() {
  const appRoute = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/compus", element: <Campus /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Register /> },
    { path: "/cashier", element: <Cashier /> },
    { path: "/allTeacher", element: <AllTeachers /> },
    { path: "/ClassWiseData", element: <ClassWiseData /> },
    { path: "/addUser", element: <RegisterUser /> },
    { path: "/addStudentDetails/:userId", element: <AddStudentDetails /> },
    { path: "/addTeacherDetails/:userId", element: <AddTeacher /> },
    { path: "/addStaffDetails/:userId", element: <AddStudentDetails /> },
    { path: "/teacherProfile/:id", element: <TeacherProfile /> },
    { path: "/studentProfile/:id", element: <StudentDashboard /> },
    { path: "/paragliding", element: <Paragliding /> },
    { path: "/addTimeTable", element: <TimeTableForm /> },
    { path: "/showtimeTable", element: <ShowTimeTable /> },
    { path: "/addClass", element: <NewClass /> },
    { path: "/attendence/:className", element: <Attendence /> },
    { path: "/attendenceDetails/:id", element: <AttendenceDetails /> },
    { path: "/eventFrom/:teacherId", element: <EventForm /> },
    { path: "/examFrom", element: <ExamForm /> },
    { path: "/showExamTable", element: <ExamTimeTable /> },
    { path: "/resultData", element: <ResultData /> },
  ]);

  return (
    <AllDataProvider>
      <RouterProvider router={appRoute}></RouterProvider>;
    </AllDataProvider>
  );
}

export default App;
