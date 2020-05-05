import React from 'react';
import styles from '../styles/Days.css';
import getWeeksForMonth from '../helpers/getWeeksForMonth.js';


class Days extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      this.renderWeek = this.renderWeek.bind(this);
  }

  renderWeek (day, index) {
    if (day === null) {
        return (<div key={index} className={styles.date}></div>)
    } else {
        return (<div key={index} className={styles.date}>{day.getDate()}</div>)
    }
  }

  render() {
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S',];
  const weeks = getWeeksForMonth(...this.props.monthYear);
  const weekDaysMarkup = weekDays.map(weekday => <div className={styles.days} key={weekday}>{weekday}</div>);
  const weeksMarkup = weeks.map((week ,index) => {
      return (
      <div key={index} className={styles.week}>
       {week.map((day, index) => this.renderWeek(day, index))}
      </div>)

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