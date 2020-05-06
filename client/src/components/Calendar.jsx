import React from 'react';
import styles from '../styles/Calendar.css';
import MonthDate from "./MonthDate";
import date from '../helpers/getDate.js';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default currentMonth and nextMonth is based on the parent component
      // when client click buttons on this component, forwardMonth and backMonth functions are triggered
      // to change the current and next months on the state.
      currentMonthYear: this.props.currentMonthYear,
      nextMonthYear: date.getNextMonthYear(this.props.currentMonthYear),
    };
    this.forwardMonth = this.forwardMonth.bind(this);
    this.backMonth = this.backMonth.bind(this);
  }

  // month button click handler - use helper function to generate previous and next month
  forwardMonth() {
    const newCurrentMonthYear = date.getNextMonthYear(this.state.nextMonthYear);
    const newNextMonthYear = date.getNextMonthYear(newCurrentMonthYear);
    this.setState({
      currentMonthYear: newCurrentMonthYear,
      nextMonthYear: newNextMonthYear
    })
  }

  backMonth() {
    const newNextMonthYear = date.getPreviousMonthYear(this.state.currentMonthYear)
    const newCurrentMonthYear = date.getPreviousMonthYear(newNextMonthYear);
    this.setState({
      currentMonthYear: newCurrentMonthYear,
      nextMonthYear: newNextMonthYear
    })    

  }

  render() {
    const nextMonthYear=this.props.currentMonthYear
    return (
      <div className={styles.container}>
        <div className={styles.leftarrow} onClick={this.backMonth}><i className={styles.arrowL}></i></div>
        <div className={styles.month_date}><MonthDate monthYear={this.state.currentMonthYear} handleDayClick={this.props.handleDayClick}/></div>
        <div className={styles.line}></div>
        <div className={styles.month_date}><MonthDate monthYear={this.state.nextMonthYear} handleDayClick={this.props.handleDayClick}/></div>
        <div className={styles.rightarrow} onClick={this.forwardMonth}><i className={styles.arrowR}></i></div>
      </div>
    );
  }
}
export default Calendar;
