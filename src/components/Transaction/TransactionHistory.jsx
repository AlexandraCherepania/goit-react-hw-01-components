import PropTypes from 'prop-types';
import css from "../Transaction/Transaction.module.css"

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody> 
                
                {items.map(item => (
                    <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))
                }  
            </tbody>
        </table>
    )
}

TransactionHistory.propType = {
    items: PropTypes.array.isRequired,
}