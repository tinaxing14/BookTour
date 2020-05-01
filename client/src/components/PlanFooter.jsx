import React from 'react';

class PlanFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="planfooter">
        <div className="planfooter_updatebtn">Update</div>
        <div className="planfooter_cancelation">
            <div className="cancelation_btn">Free Cancelation</div>
            <div className="cancelation_term">Risk free 100% refund if you cancel by Aug 18</div>
        </div>
        <div className="planfooter_popularity">
            <div className="popularity_number">Popular: Booked by 3059 travelers</div>
            <div className="popularity_lowprice"></div>
            <div className="popularity_fee"></div>
        </div>
      </div>
    );
  }
}
export default PlanFooter;
