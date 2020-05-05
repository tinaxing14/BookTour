/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/App.css';
import Calendar from './Calendar.jsx';
import SelectHeader from './SelectHeader.jsx';
import PlanFooter from './PlanFooter.jsx';
import http from '../helpers/http.js';
import date from '../helpers/getDate.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      tripData: {},
      selectDate: date.getToday(),
      selectAdults:'2',
      currentMonthYear:[date.getToday()[0], date.getToday()[2]]
    };
    this.getStartInfo = this.getStartInfo.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.getTripPrice = this.getTripPrice.bind(this);
  }

  componentDidMount() {
    this.getStartInfo();
  }

  getStartInfo() {
    http.fetchTripData('1')
      .then((data) => {
        console.log(data[0]);
        this.setState({ tripData: data[0] });
      });
  }

  getTripPrice(currentDate, adults) {
    http.fetchPrice('1', currentDate, adults)
      .then((data) => {
        console.log(data[0]);
      })
  }

  handleCalendarClick() {
    this.setState({showCalendar: !this.state.showCalendar})
  }

  render() {
    return (
      <div className={this.state.showCalendar ? styles.body_dark : styles.body}>
        <h1>OTHER COMPONENTS RENDER HERE</h1>
        <div className={styles.tourplanner}>
          <div className="dateheader">
            <SelectHeader 
              price={this.state.tripData.price}
              handleCalendarClick={this.handleCalendarClick}
              selectDate={this.state.selectDate}
            />
          </div>
          {this.state.showCalendar
            ? <div className="plancanlendar"><Calendar currentMonthYear={this.state.currentMonthYear} /></div>
            : null }
          <div className="tourfooter">
            <PlanFooter
              totalBooked={this.state.tripData.totalbooked}
              cancelation={this.state.tripData.cancelation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
