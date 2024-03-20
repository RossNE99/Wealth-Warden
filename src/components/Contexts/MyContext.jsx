import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [logs, setLogs] = useState(JSON.parse(localStorage.getItem("log")) || []);

    const updateLogs = (newLogs) => {
        localStorage.setItem("log", JSON.stringify(newLogs));
        console.log(newLogs)
        setLogs(newLogs);
    };

  return (
    <MyContext.Provider value={{ logs, updateLogs }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
