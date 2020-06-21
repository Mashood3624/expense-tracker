import React , { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Expense 1", transactionAmount: -100},
        {id: 3, description: "Income 2", transactionAmount: 2000},
        {id: 4, description: "Expense 2", transactionAmount: -500}
         ]
}



//create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    // function for delete transaction
    function deletetransaction(id){
        dispatch({
            type:'delete_transaction',
            payload: id
        });

    }

    // function for add transaction
    function addtransaction(transaction){
        dispatch({
            type:'add_transaction',
            payload: transaction
        });

    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions , deletetransaction , addtransaction}}>
        {children}
        </GlobalContext.Provider>
        )

}
