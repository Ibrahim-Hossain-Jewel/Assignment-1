import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import './expenseItem.css';
import Card from '../UI/Card'

const ExpenseItem = ({title,amount,date})=>{
    //now update inner text using usestate();
    const [titledata, settitle] = useState(title);
    const handleclick = ()=>{
        settitle('update');
            console.log(title);
        };
    return (
        //helper variable must be declare outside the function
        <Card className="expense-item">
            <ExpenseDate date = {date} />
            <h1>{titledata}</h1>
            <div className="expense-item__description">
                
                <div className="priceUpdate">
                    <div className="expense-item__price">${amount}
                    </div>
                    <button onClick={handleclick}>Change title</button>
                </div>
            </div>
        </Card>
    )
}
export default ExpenseItem;