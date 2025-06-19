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
  const [loading, setLoading] = useState(true);

  // Fetch Classes
  useEffect(() => {
    async function fetchClasses() {
      try {
        const res = await axios.get("http://localhost:5000/api/class/allClass");
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
          "http://localhost:5000/api/teacher/allTeacher"
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
          "http://localhost:5000/api/timetable/allTimeTable"
        );

       
        setAllTimeTable(res.data.timetable );
      } catch (error) {
        console.error("Error fetching timetable:", error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTimeTable();
  }, []);

  return (
    <AllDataContext.Provider
      value={{ allClass, allTeacher, allTimeTable, loading }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

// 3. Custom Hook
export const useAllData = () => useContext(AllDataContext);
