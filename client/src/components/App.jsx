/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/App.css';
import Calendar from './Calendar.jsx';
import Adults from './Adults.jsx';
import Options from './Options.jsx';
import SelectHeader from './SelectHeader.jsx';
import PlanFooter from './PlanFooter.jsx';
import http from '../helpers/http.js';
import date from '../helpers/getDate.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      showAdults: false,
      showOptions:false,
      tripData: {},
      selectDate: date.getToday(),
      selectAdults:'2',
      currentMonthYear:[date.getToday()[0], date.getToday()[2]]
    };
    this.getStartInfo = this.getStartInfo.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.getTripPrice = this.getTripPrice.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  // get initial trip and pirce info based on today's date
  componentDidMount() {
    this.getStartInfo();
  }

  // fetch initial data and set initial state
  getStartInfo() {
    http.fetchTripData('1')
      .then((data) => {
        console.log(data[0]);
        this.setState({ tripData: data[0] });
      });
  }

  // fetch trip data based on chosen data and number of adults
  getTripPrice(currentDate, adults) {
    http.fetchPrice('1', currentDate, adults)
      .then((data) => {
        console.log(data[0]);
      })
  }


  // handle click on date in Header component, toggle showCalendar state to render calendar component
  handleCalendarClick() {
    this.setState({
      showCalendar: !this.state.showCalendar,
      showAdults:false,
      showOptions:false,
    })
  }

  // handle click on day in Days component, store selected day data in state to fetch data and render
  handleDayClick(day, month, year) {
    this.setState({
      selectDate: [month, day, year],
      showCalendar:false,
      showAdults: true,
      showOptions:false,
    });
  }

  render() {
    // conditionally render Options, Adults and Calendar Components
    let renderPage;
    if(this.state.showOptions) {
      renderPage = <Options/>;
    } else if(this.state.showAdults) {
      renderPage= <Adults/>;
    } else if (this.state.showCalendar) {
      renderPage = <Calendar currentMonthYear={this.state.currentMonthYear} handleDayClick={this.handleDayClick}/>;
    } else {
      renderPage = null;
    }

    return (
      <div className={this.state.showCalendar || this.state.showAdults || this.state.showOptions ? styles.body_dark : styles.body}>
        <h1>OTHER COMPONENTS RENDER HERE</h1>
        <div className={styles.tourplanner}>
          <div className="dateheader">
            <SelectHeader 
              price={this.state.tripData.price}
              handleCalendarClick={this.handleCalendarClick}
              selectDate={this.state.selectDate}
            />
          </div>
          {renderPage}
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
