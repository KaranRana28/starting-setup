import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [choosedDate, setChoosedDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     choosedDate: '',
    // });

    const titleChangeHandler = (event) => {
        /** method 1 */
        setEnteredTitle(event.target.value); 
        /** method 2 */
        // setUserInput({ 
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
        /** method 3 */
        // setUserInput((preState) => {
        //     return { ...preState, enteredTitle : event.target.value };
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setChoosedDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = { title : enteredTitle, amount : enteredAmount, date : new Date(choosedDate) };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setChoosedDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={choosedDate} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;