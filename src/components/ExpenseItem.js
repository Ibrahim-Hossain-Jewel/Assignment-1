import React from "react";
import ExpenseDate from "./ExpenseDate";
import './expenseItem.css';

function ExpenseItem({title,amount,date}){
    
    return (
        //helper variable must be declare outside the function
        <div className="expense-item">
            <ExpenseDate date = {date} />
            <div className="expense-item__description">
                <h1>{title}</h1>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;