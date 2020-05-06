import React from 'react';
import { shallow } from 'enzyme';
import PlanFooter from '../client/src/components/PlanFooter.jsx';
import styles from '../client/src/styles/PlanFooter.css';

let wrapper;
const sampleTotalBooked = 3987;
const sampleCancelation = 24;

beforeEach(() => {
  wrapper = shallow(<PlanFooter totalBooked={sampleTotalBooked} cancelation={sampleCancelation} />)
})

// test('should render correct cancelations date', () => {
//   expect(wrapper.find(`.${styles.cancelation_term}`).text()).toBe('Risk free 100% refund if you cancel by May 5');
// });

test('should render correct total booked number', () => {
  expect(wrapper.find(`.${styles.popularity_number}`).text()).toBe('Popular: Booked by 3987 travelers')
});