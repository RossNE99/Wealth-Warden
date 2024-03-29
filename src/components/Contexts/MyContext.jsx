import React, { createContext, useState, useContext, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [logs, setLogs] = useState(JSON.parse(localStorage.getItem("log")) || []);
    const [MonthlyWage, setMonthlyWage] = useState(JSON.parse(localStorage.getItem("MonthlyWage")) || []);
    const [SavingPots, setSavingPots] = useState(JSON.parse(localStorage.getItem("SavingPots")) || []);
    const [SpendingPots, setSpendingPots] = useState(JSON.parse(localStorage.getItem("SpendingPots")) || []);
    const [MonthlyWageRemaining, setMonthlyWageRemaining] = useState()

    const updateLogs = (newLogs) => {
        localStorage.setItem("log", JSON.stringify(newLogs));
        setLogs(newLogs);
    };

    const updateMonthlyWage = (newMonthlyWage) => {
      localStorage.setItem("MonthlyWage", JSON.stringify(newMonthlyWage));
      setMonthlyWage(newMonthlyWage);
    };

    const updateSavingPot = (newSavingPot) => {
      localStorage.setItem("SavingPots", JSON.stringify(newSavingPot));
      setSavingPots(newSavingPot);
    };

    const updateSpendingPot = (newSpendingPot) => {
      localStorage.setItem("SpendingPots", JSON.stringify(newSpendingPot));
      setSpendingPots(newSpendingPot);
    };

    useEffect(() => {
      const totalAmmountInLog = logs.reduce((total, transaction) => total + transaction.amount, 0);

      setMonthlyWageRemaining(MonthlyWage - totalAmmountInLog)
    },[MonthlyWage, SavingPots, SpendingPots])

  return (
    <MyContext.Provider value={{ logs, updateLogs, MonthlyWage, updateMonthlyWage, SavingPots, updateSavingPot, SpendingPots, updateSpendingPot, MonthlyWageRemaining }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
