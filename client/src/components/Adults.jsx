import React from 'react';
import styles from '../styles/Adults.css'

const Adults = ({minusOne, plusOne, selectAdults, selectChild}) => (
<div className={styles.container}>
  <div className={styles.adult_child}>
    <div className={styles.name}>
      <div className={styles.content}>Adult</div>
      <div className={styles.age}>Age 13 - 99</div>
    </div>
      <div className={styles.number}>
        <div className={styles.minus_plus}><input data-test='adultsminus' type='button' name='selectAdults' onClick={minusOne} className={styles.button} value='-' /></div>
        <div data-test='adultDigit' className={styles.digit}>{selectAdults}</div>
        <div className={styles.minus_plus}><input data-test='adultsplus' type='button' name='selectAdults' onClick={plusOne} className={styles.button} value='+' /></div>
      </div>
  </div>
  <div className={styles.adult_child}>
    <div className={styles.name}>
      <div className={styles.content}>Child</div>
      <div className={styles.age}>Age 0 - 12</div>
    </div>
      <div className={styles.number}>
        <div className={styles.minus_plus} ><input data-test='childminus' type='button' name='selectChild' onClick={minusOne} className={styles.button} value='-' /></div>
        <div data-test='childDigit' className={styles.digit}>{selectChild}</div>
        <div className={styles.minus_plus} ><input data-test='childplus' type='button' name='selectChild' onClick={plusOne} className={styles.button} value='+' /></div>
      </div>
  </div>
</div>
);


export default Adults;
