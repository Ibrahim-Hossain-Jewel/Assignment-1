import React from "react";
import './ExpenseFilter.css';
const ExpenseFilter = (props)=>{
    
    const dropDownChangeHandler = (event)=>{
        //onFilterChangeHandler are from Expenses component
        props.onFilterChangeHandler(event.target.value);
    }
    return (
        <div className="expenses_filer">
            <div className="expenses_filte__control">
                <label>Filter by year</label>
                <select onChange={dropDownChangeHandler}  value = {props.selected}>
                    <option value='2022'>2022</option>
                    <option value= '2019'>2019</option>
                    <option value= '2018'>2018</option>
                    <option value='2017'>1017</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;
