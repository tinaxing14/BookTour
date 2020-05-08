import React from 'react';
import { shallow } from 'enzyme';
import SelectHeader from '../client/src/components/SelectHeader.jsx';
import styles from '../client/src/styles/SelectHeader.css';

let wrapper;
const samplePrice = 189;
const sampleSelectDate = ['Aug', 23, 2020];
const sampleSelectAdults = 3;
const mockHandleCalendarClick = jest.fn();
describe('Tests for SelectHeader Component', () => {
  beforeEach(() => {
    wrapper = shallow(<SelectHeader price={samplePrice} selectDate={sampleSelectDate} selectAdults={sampleSelectAdults} handleCalendarClick={mockHandleCalendarClick}/>);
  });

  test('should render correct price', ()=> {
    expect(wrapper.find("[data-test='price']").text()).toBe('$189');
  });

  test('should render three buttons on the page', () => {
    expect(wrapper.find("[data-test='optionsButton']")).toHaveLength(3);
  });

  test('should render the correct date', () => {
    expect(wrapper.find("[data-test='date']").text()).toBe('Aug 23')
  });

  test('should render correct number of adults', () => {
    expect(wrapper.find("[data-test='adults']").text()).toBe('3  Adults');
  });

  test('should render correct text of options',() => {
    expect(wrapper.find("[data-test='options']").text()).toBe('Options')
  });

  test('should invoke function handleCalendarClick when the first button is clicked', ()=> {
    wrapper.find("[data-test='handleClick']").simulate('click');
    expect(mockHandleCalendarClick).toHaveBeenCalled();
  })

})