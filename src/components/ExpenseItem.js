import React from "react";
import './expenseItem.css';

function ExpenseItem({title,amount,date}){
    const month = date.toLocaleString("en-US",{ month : 'long'});
    const day = date.toLocaleString('en-us', { day : '2-digit'});
    const year = date.getFullYear();
 
    return (
        //helper variable must be declare outside the function
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h1>{title}</h1>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;