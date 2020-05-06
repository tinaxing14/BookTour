import React from 'react';
import { shallow } from 'enzyme';
import Days from '../client/src/components/Days.jsx';
import styles from '../styles/Days.css';

const sampleMonthYear = ['May', 2020,];
const sampleArguments = [1, 'May', 2020,];
describe('Unit test for Days component', () => {
  let wrapper;
  const mockHandleDayClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Days monthYear={sampleMonthYear} handleDayClick={ ()=> {mockHandleDayClick(...sampleArguments)} }/>);
  });

  test('should render the correct weekdays', () => {
    expect(wrapper.find(`.${styles.weekday}`)).toHaveLength(1);
    expect(wrapper.find(`.${styles.weekday}`).children()).toHaveLength(7);
    expect(wrapper.find(`.${styles.weekday}`).text()).toBe('SMTWTFS');
  });

  test('should render the correct days', () => {
    expect(wrapper.find(`.${styles.weeks}`)).toHaveLength(1);
    expect(wrapper.find(`.${styles.weeks}`).children()).toHaveLength(6);
    expect(wrapper.find(`.${styles.weeks}`).text()).toBe('12345678910111213141516171819202122232425262728293031');
  });

  test('should invoke handleDayClick function when individual day is clicked', () => {
    // find the first button to test, simulate click event, expect function to be invoked
    const DayButton = wrapper.find(`.${styles.date_hover}`).first();
    DayButton.simulate('click');
    expect(mockHandleDayClick).toHaveBeenCalled();
  });

  test('should invoke handleDayClick with the correct arguments when day is clicked', () => {
    const DayButton = wrapper.find(`.${styles.date_hover}`).first();
    DayButton.simulate('click');
    expect(mockHandleDayClick).toHaveBeenCalledWith(...sampleArguments);
  });

});
