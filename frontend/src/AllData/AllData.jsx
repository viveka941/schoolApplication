// src/context/AllDataContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Create Context
const AllDataContext = createContext();

// 2. Provider Component
export const AllDataProvider = ({ children }) => {
  
  const [allClass, setAllClass] = useState([]);
  const [allTeacher, setAllTeacher] = useState([]);
  const [allTimeTable, setAllTimeTable] = useState([]);
  const [allEvent,setEvent]=useState()
  const [loading, setLoading] = useState(true);
  const [allStudent,setAllStudent] = useState([])
  const [allExam,setAllExam] = useState([])

  // Fetch Classes
  useEffect(() => {
    async function fetchClasses() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/class/allClass`
        );
        setAllClass(res.data.allClass || []);
      } catch (error) {
        console.error("Error fetching classes:", error.message);
      }
    }
    fetchClasses();
  }, []);

  // Fetch Teachers
  useEffect(() => {
    async function fetchTeachers() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/teacher/allTeacher`
        );
        setAllTeacher(res.data.list || []);
      } catch (error) {
        console.error("Error fetching teachers:", error.message);
      }
    }
    fetchTeachers();
  }, []);

  // Fetch Timetable
  useEffect(() => {
    async function fetchTimeTable() {
      // setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/timetable/allTimeTable`
        );

        setAllTimeTable(res.data.timetable);
      } catch (error) {
        console.error("Error fetching timetable:", error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTimeTable();
  }, []);

  //Event List

  useEffect(() => {
    async function list() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/event/allEvent`
        );
        setEvent(res.data.list)
      } catch (error) {
        console.log("server is not responding" + error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
          error: error.message,
        });
      }
    }
    list();
  }, []);
  useEffect(() => {
    async function stlist() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/student/allStudent`
        );
        setAllStudent(res.data.list);
      } catch (error) {
        console.log("server is not responding" + error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
          error: error.message,
        });
      }
    }
    stlist();
  }, []);

  useEffect(() => {
    async function allExam() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_USER_URL}/api/exam/class`);
        setAllExam(res.data.exams);
        
      } catch (error) {
        console.log("Exams not found", error);
      }
    }
    allExam();
  }, []);

  return (
    <AllDataContext.Provider
      value={{
        allClass,
        allTeacher,
        allTimeTable,
        loading,
        allEvent,
        allStudent,
        allExam,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

// 3. Custom Hook
export const useAllData = () => useContext(AllDataContext);
