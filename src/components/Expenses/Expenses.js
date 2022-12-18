import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState('2019');

    const changeExpenseFilteHandler = (filterData) => {
        setFilterYear(filterData);
    };

    const filteredExpenses = props.items.filter((x) => {
        return x.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expense">
            <ExpensesFilter selected={filteredYear} onChangeExpenseFilter={changeExpenseFilteHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;