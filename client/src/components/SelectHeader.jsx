import React from 'react';

class SelectHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="selectheader_header">
        <div className="header_price">
          <div className="select_date_and_travelers">Select Date and Travelers</div>
          <div className="from_rate">
            <div className="from">From
            </div>
            <div className="rate">$199
            </div>
          </div>
        </div>
        <div className="header_dates_adults_options">
          <div className="dates">Aug 20</div>
          <div className="adults">2 adults</div>
          <div className="options">Options</div>
        </div>
      </div>
    );
  }
}


export default SelectHeader;
