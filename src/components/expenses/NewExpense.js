import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onExpenseHandler(expenseData);
    }
        return <div className="new-expense">
            <ExpenseForm onsaveExpenseData = {saveExpenseDataHandler} />
        </div>
}

export default NewExpense;