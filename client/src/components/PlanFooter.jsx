import React from 'react';

class PlanFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="planfooter">
        <div className="planfooter_updatebtn"></div>
        <div className="planfooter_cancelation"></div>
        <div className="planfooter_popularity"></div>
      </div>
    );
  }
}
export default PlanFooter;
