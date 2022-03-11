import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{ //enterdExpenseData are from ExpenseForm component
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onExpenseHandler(expenseData); //returning data to the app.js attribute
    }
        return <div className="new-expense">
            <ExpenseForm onsaveExpenseData = {saveExpenseDataHandler} />
        </div>
}

export default NewExpense;