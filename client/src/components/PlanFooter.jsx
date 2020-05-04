import React from 'react';
import styles from '../styles/PlanFooter.css';

class PlanFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className={styles.planfooter}>
        <div className={styles.updatebtn}>Update</div>
        <div className={styles.cancelation}>
          <div className={styles.cancelation_btn}>Free Cancelation</div>
          <div className={styles.cancelation_term}>
            Risk free 100% refund if you cancel by !Aug 18
          </div>
        </div>
        <div className={styles.popularity}>
          <div className={styles.popularity_number}>Popular: Booked by !3059 travelers</div>
          <div>
            <span className={styles.checkicon} />
            <span className={styles.popularity_lowprice}>Low Price Guarantee</span>
          </div>
          <div>
            <span className={styles.checkicon} />
            <span className={styles.popularity_lowprice}>No Booking Fees</span>
          </div>
        </div>
      </div>
    );
  }
}
export default PlanFooter;
