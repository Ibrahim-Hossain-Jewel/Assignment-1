import React from "react";
import './ExpenseDate.css';
import Card from "../UI/Card";
/*how has called this function must declare under*/
const ExpenseDate = (props) => {
    // Transformation logic
    let month =  new Date(props.onDate).toLocaleString('en-us', { month: 'short' });
    let day = new Date(props.onDate).getDay();
    const year = new Date(props.onDate).getFullYear()
    
    return(
        <Card className="expense-date">
            <div className="expense-date__month">
                {month}
            </div>
            <div className="expense-date__year">
                {
                    year
                }
            </div>
            <div className="expense-date__day">
                {day}
            </div>
        </Card>
    )   
}

export default ExpenseDate;