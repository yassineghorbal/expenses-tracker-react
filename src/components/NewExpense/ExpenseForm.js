import React, { useState } from "react"

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setenteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setenteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setenteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setenteredTitle('')
        setenteredAmount('')
        setenteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} step="0.01" onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} required />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>cancel</button>
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm