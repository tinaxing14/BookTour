import React from 'react';
import { shallow } from 'enzyme';
import Days from '../client/src/components/Days.jsx';
import styles from '../styles/Days.css';

const sampleMonthYear = ["May", 2020];
describe('Unit test for Days component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Days monthYear={sampleMonthYear} handleDayClick={() => {}}/>)
  });

  test('should render the correct weekdays', () => {
    expect(wrapper.find(`.${styles.weekday}`)).toHaveLength(1);
    expect(wrapper.find(`.${styles.weekday}`).children()).toHaveLength(7);
    expect(wrapper.find(`.${styles.weekday}`).text()).toBe('SMTWTFS');
  });
  
  test('should render the correct days', () => {
    
  })

})