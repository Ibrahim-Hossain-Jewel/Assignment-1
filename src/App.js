import React, { useState } from 'react';
import './App.css';
import Expense from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';

let DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = ()=>{
  //Now bringing-out the new expense data with useState();
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  //This function data are from child component NewExpense.
  const addExpenseHandler = (expense)=>{
    //setExpense([expense,DUMMY_EXPENSES]) // This approach doesn't work because i need the previous state as well new state so i have to go with the functional approach;
    setExpense((prevExpenses) => {
      return ([...prevExpenses,expense]);
    });
  }

  return (
    <div className="App">
          <NewExpense onExpenseHandler = {addExpenseHandler} />
          <Expense items={expenses} />
    </div>
  );
}

export default App;
