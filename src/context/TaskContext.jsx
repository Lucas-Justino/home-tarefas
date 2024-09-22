"use client"

import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [pendentes, setPendentes] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);

  return (
    <TaskContext.Provider value={{ pendentes, setPendentes, finalizadas, setFinalizadas }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
