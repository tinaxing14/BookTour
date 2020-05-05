import React from 'react';
import styles from '../styles/SelectHeader.css';
import date from '../helpers/getDate.js'

class SelectHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_price}>
          <div className={styles.date_travelers}>Select Date and Travelers</div>
          <div className={styles.from_rate}>
            <div className={styles.from}>
              From
            </div>
            <div className={styles.rate}>
              {'$' + this.props.price}
            </div>
          </div>
        </div>
        <div className={styles.dates_adults_options}>
          <div className={styles.dates_adults_options_btn}>
            <div className={`gg-calendar-dates ${styles.icons}`} />
            {date.getDate()}
          </div>
          <div className={styles.dates_adults_options_btn}>
            <div className={`gg-user-add ${styles.icons}`} />
            2 adults
          </div>
          <div className={styles.dates_adults_options_btn}>
            <div className={`gg-awards ${styles.icons}`} />
            Options
          </div>
        </div>
      </div>
    );
  }
}


export default SelectHeader;
