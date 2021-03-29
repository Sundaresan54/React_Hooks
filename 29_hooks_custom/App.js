import React, { Component } from 'react'
import EmployeeList from './components/EmployeeList'
import CustomerList from './components/CustomerList'

class App extends Component {
    render() {
        return (
            <>
                <EmployeeList heading="Employee List (Using custom hook)"/>
                <CustomerList heading="Customer List (Using custom hook)"/>
            </>
        )
    }
}

export default App
