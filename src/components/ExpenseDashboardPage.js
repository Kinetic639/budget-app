import React from 'react'
import ExpensesList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters'



export default function ExpenseDashboardPage(props) {
    return (
        <div>
            <ExpenseListFilters />
            <ExpensesList />
        </div>
    )
}
