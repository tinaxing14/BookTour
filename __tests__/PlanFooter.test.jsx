import React from 'react';
import PlanFooter from '../client/src/components/PlanFooter.jsx';
import styles from '../client/src/styles/PlanFooter.css';

let wrapper;
const sampleTotalBooked = 3987;
const sampleCancelation = 24;
const sampleSelectDate = ['May', 7, 2020];
const mockGoNext = jest.fn();
let sampleAdults = false;
let sampleCalendar = false;
let sampleOptions = true;

describe('Tests for PlanFooter Component', () => {

  beforeEach(() => {
    wrapper = shallow(<PlanFooter totalBooked={sampleTotalBooked} cancelation={sampleCancelation} showCalendar={sampleCalendar} showAdults={sampleAdults} showOptions={sampleOptions} goNext={mockGoNext} selectDate={sampleSelectDate} />)
  })

  test('should render correct cancelations date', () => {
    expect(wrapper.find("[data-test='cancelterm']").text()).toEqual('Risk free 100% refund if you cancel by May 8');
  });
  
  test('should render correct total booked number', () => {
    expect(wrapper.find("[data-test='popnum']").text()).toBe('Popular: Booked by 3987 travelers')
  });

  test('should render correct button text when prop changes, render Book Now', () => {
    expect(wrapper.find("[data-test='updatebtn']").text()).toBe('Book Now');
  });
  
  test('should render correct button text when prop changesm render Next', ()=>{
    sampleOptions = false;
    sampleAdults = true;
    wrapper.setProps({showOptions: sampleOptions, showAdults: sampleAdults});
    expect(wrapper.find("[data-test='updatebtn']").text()).toBe('Next');
    sampleAdults = false;
    sampleCalendar = true;
    wrapper.setProps({showAdults:sampleAdults, showCalendar:sampleCalendar});
    expect(wrapper.find("[data-test='updatebtn']").text()).toBe('Next');
  });

  test('should render correct button text when prop changes, render Check Availability', ()=>{
    sampleOptions = false;
    sampleAdults = false;
    sampleCalendar =false;
    wrapper.setProps({showOptions: sampleOptions, showAdults: sampleAdults, showCalendar: sampleCalendar});
    expect(wrapper.find("[data-test='updatebtn']").text()).toBe('Check Availability');
  });

  test('should invoke go next function when button is clicked', () => {
    wrapper.find("[data-test='updatebtn']").simulate('click');
    expect(mockGoNext).toHaveBeenCalled();
  });

})








