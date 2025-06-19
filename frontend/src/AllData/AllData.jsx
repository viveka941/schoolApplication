// src/context/AllDataContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create context
const AllDataContext = createContext();

// Provider component
export const AllDataProvider = ({ children }) => {
  const [allClass, setAllClass] = useState([]);
  const [allTeacher, setAllTeacher] = useState([]);

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

  return (
    <AllDataContext.Provider value={{ allClass, allTeacher }}>
      {children}
    </AllDataContext.Provider>
  );
};

// Custom hook for easier usage
export const useAllData = () => useContext(AllDataContext);
