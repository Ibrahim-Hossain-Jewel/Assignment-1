
import ExpenseItem from './ExpenseItem'
import './Expense.css';
import Card from '../UI/Card';

const Expense = ()=>{
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
  return (
    <div>
        <Card className = "jewel">
          <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} />
          <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} />
          <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} />
        </Card>
    </div>
  );
}

export default Expense;
