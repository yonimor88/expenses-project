import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.css";

export default function ExpenseForm(props) {
  // states
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);

  // handlers
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formExpenseData = {
      title: title,
      amount: parseInt(amount),
      date: new Date(date),
    };
    //function that passes new expense data to App
    props.newExpenseData(formExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
    handleToggle();
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {!toggle ? (
        <button className="new-expense__actions" onClick={handleToggle}>
          Add Expense
        </button>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> Title </label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
              ></input>
            </div>
            <div className="new-expense__control">
              <label> Amount </label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={handleAmountChange}
              ></input>
            </div>
            <div className="new-expense__control">
              <label> Date </label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-21"
                value={date}
                onChange={handleDateChange}
              ></input>
            </div>
            <button className="new-expense__actions" type="submit">
              Add Expense
            </button>
            <button className="new-expense__actions" onClick={handleToggle}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
