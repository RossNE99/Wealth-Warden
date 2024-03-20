import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [logs, setLogs] = useState(JSON.parse(localStorage.getItem("log")) || []);
    const [MonthlyWage, setMonthlyWage] = useState(JSON.parse(localStorage.getItem("MonthlyWage")) || []);
    const [SavingPots, setSavingPots] = useState(JSON.parse(localStorage.getItem("SavingPots")) || []);
    const [SpendingPots, setSpendingPots] = useState(JSON.parse(localStorage.getItem("SpendingPots")) || []);

    const updateLogs = (newLogs) => {
        localStorage.setItem("log", JSON.stringify(newLogs));
        console.log(newLogs)
        setLogs(newLogs);
    };

    const updateMonthlyWage = (newMonthlyWage) => {
      localStorage.setItem("MonthlyWage", JSON.stringify(newMonthlyWage));
      console.log(newMonthlyWage)
      setMonthlyWage(newMonthlyWage);
    };

    const updateSavingPot = (newSavingPot) => {
      localStorage.setItem("SavingPots", JSON.stringify(newSavingPot));
      console.log(newSavingPot)
      setSavingPots(newSavingPot);
    };

    const updateSpendingPot = (newSpendingPot) => {
      localStorage.setItem("SpendingPots", JSON.stringify(newSpendingPot));
      console.log(newSpendingPot)
      setSpendingPots(newSpendingPot);
    };

  return (
    <MyContext.Provider value={{ logs, updateLogs, MonthlyWage, updateMonthlyWage, SavingPots, updateSavingPot, SpendingPots, updateSpendingPot }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
