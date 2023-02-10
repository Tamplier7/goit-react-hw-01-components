import css from './TransactionsTableHead.module.css';

const TransactionsTableHead = () => {
  return (
    <thead>
      <tr className={css.tableHeadRow}>
        <th className={css.tableHeadData}>Type</th>
        <th className={css.tableHeadData}>Amount</th>
        <th className={css.tableHeadData}>Currency</th>
      </tr>
    </thead>
  );
};

export default TransactionsTableHead;
