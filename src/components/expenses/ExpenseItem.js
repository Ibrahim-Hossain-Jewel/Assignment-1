import React from "react";
import ExpenseDate from "./ExpenseDate";
import './expenseItem.css';
import Card from '../UI/Card'

const ExpenseItem = ({title,amount,date})=>{
    
    return (
        //helper variable must be declare outside the function
        <Card className="expense-item">
            <ExpenseDate onDate = {date} />
            <h1>{title}</h1>
            <div className="expense-item__description">
                
                <div className="priceUpdate">
                    <div className="expense-item__price">${amount}
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default ExpenseItem;