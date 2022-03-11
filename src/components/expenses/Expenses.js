import ExpenseItem from './ExpenseItem'
import './Expense.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React,{ Fragment, useState } from 'react';

const Expense = (props)=>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  const filterExpenses = props.items.filter(userDate => {
    return new Date(userDate.date).getFullYear().toString() === filteredYear;
  });
  return (
    <div>
        <Card className = "jewel">
        <ExpenseFilter onFilterChangeHandler = {filterChangeHandler} selected = {filteredYear} />  
        {filterExpenses.length === 0 && <p>No item Found</p> }
        {
          filterExpenses.length > 0 &&  props.items.map(data => {
            return( 
              <ExpenseItem key={data.id} title = {data.title} amount = {data.amount} date = {data.date} />
           )
          })
        }
        </Card>
    </div>
  );
}

export default Expense;
