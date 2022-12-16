import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState('2019');

    const changeExpenseFilteHandler = (filterData) => {
        setFilterYear(filterData);
    };

    const filteredExpenses = props.items.filter((x) => {
        return x.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li>
            <Card className="expense">
                <ExpensesFilter selected={filteredYear} onChangeExpenseFilter={changeExpenseFilteHandler} />
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;