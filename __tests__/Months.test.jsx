import React from 'react';
import { shallow } from 'enzyme';
import Months from '../client/src/components/Months.jsx';
import styles from '../client/src/styles/Months.css';

test('should render correct month and year', () => {
  const sampleMonthYear = ['May', 2020,];
  const wrapper = shallow(<Months monthYear={sampleMonthYear}/>);
  expect(wrapper.find(`.${styles.month_header}`).text()).toBe('May 2020');
})