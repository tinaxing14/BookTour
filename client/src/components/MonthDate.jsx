import React from 'react';
import styles from '../styles/MonthDate.css';
import Months from './Months.jsx';
import Days from './Days.jsx';
class MonthDate extends React.Component {
  constructor(props) {
        super(props);
        this.state = {};
  }

  render() {
    return(
      <div className={styles.container}>
        <div className={styles.month}>
            <Months/>
        </div>
        <div className={styles.date}>
            <Days/>
        </div>
      </div>
    )
  }

}

export default MonthDate;