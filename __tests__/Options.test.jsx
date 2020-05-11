import React from 'react';
import Options from '../client/src/components/Options.jsx';
import styles from '../styles/Options.css';
import data from '../client/src/apiExampleData.js';

let wrapper;
const sampleTripData = data.resJsonData[0];
const sampleTripData_two = data.resJsonData_price[0];

describe('tests for Options component', () => {
  beforeEach(() => {
    wrapper = shallow(<Options tripData={sampleTripData} selectAdults='3' />);
  });

  test('should render correct trip duration', () => {
    expect(wrapper.find("[data-test='tripDuration']").text()).toEqual('6:00 am Departure - 6:00 AM');
    expect(wrapper.find("[data-test='tripDetail']").text()).toEqual('6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included');
    expect(wrapper.find("[data-test='tripPrice']").text()).toEqual('$597');
    expect(wrapper.find("[data-test='tripPriceCal']").text()).toEqual('3Adults x $199');
    expect(wrapper.find("[data-test='tripTime']").text()).toEqual('6:00 am');
  });

  test('should calculate and render correct price when prop changes', () => {
    wrapper.setProps({tripData: sampleTripData_two, selectAdults: '4'});
    expect(wrapper.find("[data-test='tripPrice']").text()).toEqual('$676');
    expect(wrapper.find("[data-test='tripPriceCal']").text()).toEqual('4Adults x $169');

  });

})