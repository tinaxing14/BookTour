import React from 'react';
import { shallow } from 'enzyme';
import Adults from '../client/src/components/Adults.jsx';
import styles from '../styles/Adults.css';

let wrapper;
const mockMinusOne = jest.fn();
const mockPlusOne = jest.fn();
describe('tests for Adults component', () => {
  beforeEach(() => {
    wrapper = shallow(<Adults minusOne={mockMinusOne} plusOne={mockPlusOne} selectAdults='2' selectChild ='1'/>)
  });

  test('should render total 4 buttons', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('should have two buttons for selectAdults and two buttons for selectChild', () => {
    expect(wrapper.find("[data-test='adultsminus']")).toHaveLength(1);
    expect(wrapper.find("[data-test='adultsplus']")).toHaveLength(1);
    expect(wrapper.find("[data-test='childminus']")).toHaveLength(1);
    expect(wrapper.find("[data-test='childplus']")).toHaveLength(1);
  });

  test('should invoke the correct minus or plus functions when different buttons are clicked', () => {
    wrapper.find("[data-test='adultsminus']").simulate('click');
    expect(mockMinusOne).toHaveBeenCalled();
    wrapper.find("[data-test='adultsplus']").simulate('click');
    expect(mockPlusOne).toHaveBeenCalled();
    wrapper.find("[data-test='childminus']").simulate('click');
    expect(mockMinusOne).toHaveBeenCalled();
    wrapper.find("[data-test='childplus']").simulate('click');
    expect(mockPlusOne).toHaveBeenCalled();
  });

  test('should render different number of adults and child when prop changes', () => {
    expect(wrapper.find("[data-test='adultDigit']").text()).toEqual('2');
    expect(wrapper.find("[data-test='childDigit']").text()).toEqual('1');
    wrapper.setProps({selectAdults: '3', selectChild :'0'});
    expect(wrapper.find("[data-test='adultDigit']").text()).toEqual('3');
    expect(wrapper.find("[data-test='childDigit']").text()).toEqual('0');
  });
 
});