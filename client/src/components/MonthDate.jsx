import React from 'react';
import styles from '../styles/MonthDate.css';
import Months from './Months.jsx';
import Days from './Days.jsx';
const MonthDate = ({ monthYear, handleDayClick }) => (
  <div className={styles.container}>
    <div className={styles.month}>
        <Months monthYear={monthYear}/>
    </div>
    <div className={styles.date}>
        <Days monthYear={monthYear} handleDayClick={handleDayClick}/>
    </div>
  </div>
);

export default MonthDate;