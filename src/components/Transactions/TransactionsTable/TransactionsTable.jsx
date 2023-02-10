import TransactionsTableBody from '../TransactionsTableBody/TransactionsTableBody';
import TransactionsTableHead from '../TransactionsTableHead/TransactionsTableHead';
import css from './TransactionsTable.module.css';
import PropTypes from 'prop-types';

const TransactionsTable = ({ transactions }) => {
  return (
    <table className={css.transactionsTable}>
      <TransactionsTableHead />
      <TransactionsTableBody transactions={transactions} />
    </table>
  );
};

export default TransactionsTable;

TransactionsTableBody.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})),
};
