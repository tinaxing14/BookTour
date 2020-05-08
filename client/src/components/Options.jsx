import React from 'react';
import styles from '../styles/Options.css'

const Options = ({tripData, selectAdults}) => (
  <div className={styles.container}>
    <div className={styles.detail}>
      <div className={styles.content}>
        <div className={styles.title}>{tripData.duration}</div>
        <div className={styles.tripdetail}>{tripData.detail}</div>
      </div>
      <div className={styles.price}>
        <div className={styles.total}>Total</div>
        <div className={styles.dollar}>{'$' + tripData.price*selectAdults}</div>
<div className={styles.calculate}>{`${selectAdults}Adults x $${tripData.price}`}</div>
      </div>
      <div className={styles.check}>
      <span class={styles.checkmark}>
      <div class={styles.checkmark_circle}></div>
      <div class={styles.checkmark_stem}></div>
      <div class={styles.checkmark_kick}></div>
      </span>
      </div>
    </div>
    <div className={styles.time}>
      {tripData.duration.slice(0,7)}
    </div>
  </div>
)

export default Options;
