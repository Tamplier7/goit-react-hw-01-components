import css from './TransactionsTableBody.module.css';
import PropTypes from 'prop-types';

const TransactionsTableBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableData}>{type}</td>
            <td className={css.tableData}>{amount}</td>
            <td className={css.tableData}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TransactionsTableBody;

TransactionsTableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
