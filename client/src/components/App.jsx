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
      selectAdults: 2,
      selectChild: 0,
      spinner:false,
      currentMonthYear:[date.getToday()[0], date.getToday()[2]]
    };
    this.getStartInfo = this.getStartInfo.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.getTripPrice = this.getTripPrice.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleAdultsClick = this.handleAdultsClick.bind(this);
    this.handleOptionsClick = this.handleOptionsClick.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.plusOne = this.plusOne.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  // get initial trip and pirce info based on today's date
  componentDidMount() {
    this.getStartInfo();
  }

  // fetch initial data and set initial state
  getStartInfo() {
    return http.fetchTripData('1')
      .then((data) => {
        this.setState({ tripData: data[0] });
      });
  }
  
  // fetch trip data based on chosen data and number of adults
  getTripPrice(currentDate, adults) {
    this.setState({spinner: true});
    http.fetchPrice('1', currentDate, adults)
      .then((data) => {
        this.setState({ tripData: data[0]});
        setTimeout(() => {
          this.setState({spinner: false})
        }, 2000)
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

  handleAdultsClick() {
    this.setState({
      showCalendar: false,
      showAdults:!this.state.showAdults,
      showOptions:false,
    })
  }

  handleOptionsClick() {
    this.setState({
      showCalendar: false,
      showAdults:false,
      showOptions:!this.state.showOptions,
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

  //handle choose number of adults

  minusOne(e) {
    const name = e.target.name;
    let newValue;
    if(this.state[name] === 0) {
      newValue = 0;
    } else {
      newValue = this.state[name] - 1
    }
    this.setState({[name]: newValue})
  }

  plusOne(e) {
    const name = e.target.name;
    let newValue;
    newValue = this.state[name] + 1
    this.setState({[name]: newValue})
  }

  //click handler on the main steps button 
  goNext() {
    if(!this.state.showCalendar && !this.state.showAdults && !this.state.showOptions) {
      this.setState({
        showCalendar: true,
        showAdults: false,
        showOptions:false,
      })
    } else if(this.state.showAdults) {
      this.setState({
        showCalendar: false,
        showAdults: false,
        showOptions:true,
      });
      const dateStr = date.getDateStr(this.state.selectDate);
      this.getTripPrice(dateStr, this.state.selectAdults);

    } else if (this.state.showCalendar) {
      this.setState({
        showCalendar: false,
        showAdults: true,
        showOptions:false,
      })
    } else {
      this.setState({
        showCalendar: false,
        showAdults: false,
        showOptions:false,
      })
    }
  }

  render() {
    // conditionally render Options, Adults and Calendar Components
    let renderPage;
    if(this.state.showOptions) {
      if(this.state.spinner) {
        renderPage = <div className={styles.spinner_container}><div className={styles.spinner}></div></div>
      } else {
        this.state.tripData.trip_availability <= 0
        ? renderPage = <div className={styles.notAvailable}>Sorry, trip is not available, please choose another date.</div>
        : renderPage = <Options tripData={this.state.tripData} selectAdults={this.state.selectAdults}/>
      };
    } else if(this.state.showAdults) {
      renderPage= <Adults minusOne={this.minusOne} plusOne={this.plusOne} selectAdults={this.state.selectAdults} selectChild={this.state.selectChild}/>;
    } else if (this.state.showCalendar) {
      renderPage = <Calendar currentMonthYear={this.state.currentMonthYear} handleDayClick={this.handleDayClick}/>;
    } else {
      renderPage = null;
    }

    return (
      <div className={this.state.showCalendar || this.state.showAdults || this.state.showOptions ? styles.body_dark : styles.body}>

        <div className={styles.tourplanner}>
          <div>
            <SelectHeader 
              price={this.state.tripData.price}
              handleCalendarClick={this.handleCalendarClick}
              selectDate={this.state.selectDate}
              selectAdults={this.state.selectAdults}
              showAdults={this.state.showAdults}
              showOptions={this.state.showOptions}
              showCalendar={this.state.showCalendar}
              handleAdultsClick={this.handleAdultsClick}
              handleOptionsClick={this.handleOptionsClick}
            />
          </div>
          {renderPage}
          <div>
            <PlanFooter
              totalBooked={this.state.tripData.totalbooked}
              cancelation={this.state.tripData.cancelation}
              showCalendar={this.state.showCalendar}
              showAdults={this.state.showAdults}
              showOptions={this.state.showOptions}
              goNext={this.goNext}
              selectDate={this.state.selectDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
