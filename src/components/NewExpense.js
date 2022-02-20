import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  //function receives new expense data from ExpenseForm and passes it to App
  const newExpenseData = (formExpenseData) => {
    const newExpenseData = { ...formExpenseData, id: Math.random().toString() };
    props.AppExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm newExpenseData={newExpenseData} />
    </div>
  );
}
