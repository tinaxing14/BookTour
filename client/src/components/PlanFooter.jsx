/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/PlanFooter.css';
import date from '../helpers/getDate.js';

const PlanFooter = ({ cancelation, totalBooked}) => (
  <div className={styles.planfooter}>
    <div className={styles.updatebtn}>Update</div>
    <div className={styles.cancelation}>
      <div className={styles.cancelation_btn}>Free Cancelation</div>
      <div className={styles.cancelation_term}>
      {`Risk free 100% refund if you cancel by 
      ${date.getCancelationDate(cancelation)}`}
      </div>
    </div>
    <div className={styles.popularity}>
      <div className={styles.popularity_number}>{`Popular: Booked by ${totalBooked} travelers`}</div>
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

export default PlanFooter;
