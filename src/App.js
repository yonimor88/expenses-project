import React, { useState } from "react";

import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import "./App.css";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesChart from "./components/ExpensesChart";
function App() {
  //states
  const [expenses, setExpenses] = useState([
    {
      title: "Rent",
      amount: 1000,
      date: new Date("2022-01-01"),
      id: Math.random(),
    },
  ]);
  const [year, setYear] = useState("2022");

  //functions to pass to child components
  const AppExpenseData = (newExpenseData) => {
    setExpenses((prevExpense) => {
      return [newExpenseData, ...prevExpense];
    });
  };

  const yearSelected = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const deleteExpense = (id) => {
    setExpenses((prevExpense) => {
      return prevExpense.filter((expense) => expense.id !== id);
    });
  };

  const editExpense = (id, updateExpense) => {
    setExpenses((prevExpense) => {
      return prevExpense.map((expense) => {
        if (expense.id === id) {
          return {
            ...expense,
            ...updateExpense,
          };
        } else {
          return expense;
        }
      });
    });
  };

  let expensesContent = <p style={{ color: "white" }}>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        id={expense.id}
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    ));
  }

  return (
    <div className="App">
      <NewExpense AppExpenseData={AppExpenseData} />
      <ExpensesFilter yearSelected={yearSelected} year={year} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </div>
  );
}

export default App;
