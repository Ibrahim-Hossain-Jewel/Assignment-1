import React, { useState } from "react"
import './ExpenseForm.css';

const ExpenseForm = ()=>{
    //use one state without multiple useState();
    const [usertitle, setusertitle] = useState('');
    const [userdate, setuserdate] = useState('');
    const [useramount, setuseramount] = useState('');

    
    //titlehandler
    const titlehandler = (event)=>{
        setusertitle(event.target.value);
        console.log(event.target.value)
    }
    //userdatehandler
    const userdatehandler = (event) =>{
        setuserdate(event.target.value);
    }
    //useramounthandler
    const useramounthandler = (event)=>{
        setuseramount(event.target.value);
    }
    //user form handler;
    const userformthandler = (event)=>{
        event.preventDefault();
        //combine all the data to the object;
        const newExpense = {
            title : usertitle,
            date : userdate,
            amount : useramount
        }
        console.log(newExpense);
        //apply the two way binding;
        setuseramount(''); //userAmount is reset;
        setuserdate('');
        setusertitle('');

    }

    return (
            <form onSubmit = {userformthandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text'  onChange={titlehandler}  value = {usertitle} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01'  onChange ={useramounthandler} value = {useramount} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max = '2022-12-31' onChange={userdatehandler} value = {userdate} />
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
    )
}
export default ExpenseForm;