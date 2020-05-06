import React from 'react';
import styles from '../styles/Days.css';
import getWeeksForMonth from '../helpers/getWeeksForMonth.js';


class Days extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.renderWeek = this.renderWeek.bind(this);
  }
 
  //helper function to render days in a week
  renderWeek (day, index) {
    if (day === null) {
        // if day is null, return an empty div
        return (<div key={index} className={styles.date}></div>)
    } else {
        return (
        // else return a div with the day
        <div key={index} 
             className={`${styles.date} ${styles.date_hover}`} 
             onClick={()=> { this.props.handleDayClick(day.getDate(),...this.props.monthYear)}}>
        {day.getDate()}
        </div>)
    }
  }

  render() {
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S',];

  // use getWeeksForMonth helper function to generate days in a specific month given month and year params
  // data format - array of weeks of days each week.
  const weeks = getWeeksForMonth(...this.props.monthYear);

 // generate weekdays divs
  const weekDaysMarkup = weekDays.map(weekday => <div className={styles.days} key={weekday}>{weekday}</div>);

 // generate month days divs
  const weeksMarkup = weeks.map((week ,index) => {
      return (
      <div key={index} className={styles.week}>
       {week.map((day, index) => this.renderWeek(day, index))}
      </div>);

  })
    return(
      <div className={styles.container}>
        <div className={styles.weekday}>
        {weekDaysMarkup}
        </div>
        <div className={styles.weeks}>
        {weeksMarkup}
        </div>
      </div>
    )
  }

}

export default Days;