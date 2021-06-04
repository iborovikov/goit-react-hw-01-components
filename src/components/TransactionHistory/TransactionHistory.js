import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transaction__history}>
        <thead className={styles.table__head}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }, index) => {
                const bcg = index % 2 === 0 ? 'white' : 'seashell'

                return (
                <tr key={id}>
                    <td className={styles.data} style={{ backgroundColor: bcg }}>{type}</td>
                    <td className={styles.data} style={{ backgroundColor: bcg }}>{amount}</td>
                    <td className={styles.data} style={{ backgroundColor: bcg }}>{currency}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
);
export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}