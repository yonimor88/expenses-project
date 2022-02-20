import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const [toggle, setToggle] = useState(false);
  const [newAmount, setNewAmount] = useState({ amount: props.amount });

  const deleteExpense = () => {
    props.deleteExpense(props.id);
  };

  const editExpense = (e) => {
    e.preventDefault();

    props.editExpense(props.id, newAmount);
    setToggle(!toggle);
    console.log(newAmount);
  };

  const toggleEdit = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    setNewAmount({ amount: e.target.value });
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h1 className="expense-item__description">Decription: {props.title}</h1>
        <div className="expense-item__priceDelete">
          <h2 className="expense-item__price">Amount: {props.amount}</h2>
          <button className="expense-item__delete" onClick={deleteExpense}>
            X
          </button>
          {!toggle ? (
            <button className="expense-item__delete" onClick={toggleEdit}>
              Edit
            </button>
          ) : (
            <form onSubmit={editExpense}>
              <button className="expense-item__delete">Update</button>
              <input
                placeholder={props.amount}
                onChange={handleChange}
                type="number"
              ></input>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
