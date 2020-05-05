import React from 'react';
import styles from '../styles/Months.css'
class Month extends React.Component {
  constructor(props) {
        super(props);
        this.state = {};
  }

  render() {
    return(
      <div className={styles.month_header}>
        !June 2020
      </div>
    )
  }

}

export default Month;