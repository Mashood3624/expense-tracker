import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export const Transaction = ({transaction}) => {
    const  { deletetransaction } = useContext(GlobalContext);
    const sign = transaction.transactionAmount < 0 ? '-' : '+' ; 

    return (
            <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
                {transaction.description}
                <span>{ sign}${Math.abs(transaction.transactionAmount)}</span>
                <button className="delete-btn" onClick={() => deletetransaction(transaction.id)}>X</button>
            </li>
    )
}