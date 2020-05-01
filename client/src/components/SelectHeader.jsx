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
          <div className="header_dates_adults_options_btn dates"><i class="gg-calendar-dates"></i>Aug 20</div>
          <div className="header_dates_adults_options_btn adults"><i class="gg-user-add"></i>2 adults</div>
          <div className="header_dates_adults_options_btn options"><i class="gg-awards"></i>Options</div>
        </div>
      </div>
    );
  }
}


export default SelectHeader;
