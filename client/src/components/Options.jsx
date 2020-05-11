import React from 'react';
import styles from '../styles/Options.css';

class Options extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contentWrap: styles.tripdetail,
      readmore:false,
    }
    this.toggleRead = this.toggleRead.bind(this);
  }
  toggleRead() {
    this.setState({
      contentWrap: styles.tripdetail_change,
      readmore: !this.state.readmore,
    });

  }

  render() {
    const {tripData, selectAdults} = this.props;
    return (
      <div className={styles.container}>
      <div className={styles.detail}>
        <div className={styles.content}>
          <div data-test='tripDuration' className={styles.title}>{tripData.duration}</div>
          <div data-test='tripDetail' className={this.state.contentWrap}>{tripData.detail}</div>
          {this.state.readmore ? null : <div onClick={this.toggleRead} className={styles.read}>Read More</div>}
        </div>
        <div className={styles.price}>
          <div className={styles.total}>Total</div>
          <div data-test='tripPrice' className={styles.dollar}>{'$' + tripData.price*selectAdults}</div>
      <div data-test='tripPriceCal' className={styles.calculate}>{`${selectAdults}Adults x $${tripData.price}`}</div>
        </div>
        <div className={styles.check}>
        <span className={styles.checkmark}>
        <div className={styles.checkmark_circle}></div>
        <div className={styles.checkmark_stem}></div>
        <div className={styles.checkmark_kick}></div>
        </span>
        </div>
      </div>
      <div data-test='tripTime' className={styles.time}>
        {tripData.duration.slice(0,7)}
      </div>
    </div>      
    )
  }
};

export default Options;
