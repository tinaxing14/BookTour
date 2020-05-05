import React from 'react';
import styles from '../styles/Calendar.css';
import MonthDate from './MonthDate.jsx'


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.month_date}><MonthDate/></div>
        <div className={styles.line}></div>
        <div className={styles.month_date}><MonthDate/></div>
      </div>
    );
  }
}
export default Calendar;
