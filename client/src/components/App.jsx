/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/App.css';
import Calendar from './Calendar.jsx';
import SelectHeader from './SelectHeader.jsx';
import PlanFooter from './PlanFooter.jsx';
import http from '../helpers/http.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: true,
      // store the trip info in App component as it is rendered in both header and footer component
      tripData: {},

    };
    this.getStartInfo = this.getStartInfo.bind(this);
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

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.tourplanner}>
          <div className="dateheader"><SelectHeader price={this.state.tripData.price} /></div>
          {this.state.showCalendar
            ? <div className="plancanlendar"><Calendar /></div>
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
