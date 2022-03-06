import React from 'react';
import './App.css';
import Expense from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';
const App = ()=>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 94.12,
      date: new Date(3,3,2022)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 777.12,
      date: new Date(4,3,2022)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(3,3,2022)
    }
  ];
  const addExpenseHandler = (expense)=>{
    console.log('these data are from app.js');
      console.log(expense);
  }
  return (
    <div className="App">
          <NewExpense onExpenseHandler = {addExpenseHandler} />
          <Expense />
    </div>
  );
}

export default App;
