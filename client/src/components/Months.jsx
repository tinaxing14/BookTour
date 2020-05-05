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
        {this.props.monthYear[0] + ' ' + this.props.monthYear[1]}
      </div>
    )
  }

}

export default Month;