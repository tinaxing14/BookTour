import React from 'react';
import styles from '../styles/Months.css';

const Months = ({monthYear}) => (
  <div className={styles.month_header}>
    {`${monthYear[0]} ${monthYear[1]}`}
  </div>
);

export default Months;
