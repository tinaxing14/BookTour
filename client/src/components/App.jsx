import React from 'react';
import Calendar from './Calendar.jsx';
import SelectHeader from './SelectHeader.jsx';
import PlanFooter from './PlanFooter.jsx';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showCalendar: false,
    };
  }
  render() {
    return (
      <div id="desktop_tour_planner" className="tourplanner">
        <div id="select_date_header" className="dateheader"><SelectHeader /></div>
        {this.state.showCalendar
          ? <div id="tour_plan_calendar" className="plancanlendar"><Calendar /></div>
          : null }
        <div id="tour_plan_footer" className="tourfooter"><PlanFooter /></div>
      </div>
    )
  }

}

export default App;