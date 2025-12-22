import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });

    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      const parsed = JSON.parse(stored);
      setLoggedUser(parsed);
      setUser(parsed.role);
    }
  }, []);

  const login = (email, password) => {
    const adminUser = userData.admin.find(
      (a) => a.email === email && a.password === password
    );

    const employeeUser = userData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (adminUser) {
      const data = { role: "admin", email };
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      setUser("admin");
      setLoggedUser(data);
      toast.success("Admin login successful");
    } else if (employeeUser) {
      const data = { role: "employee", email };
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      setUser("employee");
      setLoggedUser(data);
      toast.success("Employee login successful");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser("");
    setLoggedUser(null);
    toast.success("Logout Successful");
  };

  const assignTask = (employeeEmail, newTask) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.email === employeeEmail) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });

    const updatedData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    toast.success("Task assigned successfully");
  };

  const updateTaskStatus = (employeeEmail, taskIndex, newStatus) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.email === employeeEmail) {
        const oldTask = emp.tasks[taskIndex];
        if (!oldTask) return emp;

        if (oldTask.status === "Completed" || oldTask.status === "Failed") {
          return emp;
        }

        const updatedTask = {
          ...oldTask,
          status: newStatus,
          active: false,
          newTask: false,
          completed: newStatus === "Completed",
          failed: newStatus === "Failed",
        };

        const updatedTasks = emp.tasks.map((t, i) =>
          i === taskIndex ? updatedTask : t
        );

        const updatedCounts = { ...emp.taskCounts };

        if (oldTask.status === "New") updatedCounts.newTask--;
        if (oldTask.status === "In Progress") updatedCounts.active--;

        if (newStatus === "Completed") updatedCounts.completed++;
        if (newStatus === "Failed") updatedCounts.failed++;

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: updatedCounts,
        };
      }
      return emp;
    });

    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedUser,
        employees: userData.employees,
        admin: userData.admin,
        login,
        logout,
        assignTask,
        updateTaskStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
