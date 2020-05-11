import React from 'react';
import Calendar from '../client/src/components/Calendar.jsx';
import styles from '../styles/Calendar.css';
import MonthDate from '../client/src/components/MonthDate.jsx';


describe('', () => {
  const sampleMonthYear = ['May', 2020,];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calendar currentMonthYear={sampleMonthYear} handleDayClick={() => {}} />)
  })

  describe('Render tests', () => {
    test('it should render two MonthDate components', () => {
      expect(wrapper.find(MonthDate)).toHaveLength(2);
    })
  });

  describe('Unit interaction tests', () => {
    
    test('it should invoke froward Month function when rightarrow button is clicked', () => {
      // create a mock function for class methods
      const mockForwardMonth = jest.fn();
      // create an instance of the class and change the method to mock method
      wrapper.instance().forwardMonth = mockForwardMonth;
      // force the component to update rendering
      wrapper.instance().forceUpdate();
      // get the node for testing
      wrapper.find(`.${styles.rightarrow}`).simulate('click');
      expect(mockForwardMonth).toHaveBeenCalled()
    });

    test('it should invoke back month function when leftarrow button is clicked', () => {
      const mockBackMonth = jest.fn();
      wrapper.instance().backMonth = mockBackMonth;
      wrapper.instance().forceUpdate();
      wrapper.find(`.${styles.leftarrow}`).simulate('click');
      expect(mockBackMonth).toHaveBeenCalled();
    });

    test('it should change to correct state when back month functoin is called', () => {
        // create instance and call the method
        wrapper.instance().backMonth();
        //check the state change on the instance
        expect(wrapper.instance().state.currentMonthYear).toStrictEqual(['Mar', 2020]);
        expect(wrapper.instance().state.nextMonthYear).toStrictEqual(['Apr', 2020]);
    
    });

    test('it should change to correct state when forward month functoin is called', () => {
        wrapper.instance().forwardMonth();
        // toStrictEqual to test that objects have the same types as well as structure
        expect(wrapper.instance().state.currentMonthYear).toStrictEqual(['Jul', 2020]);
        expect(wrapper.instance().state.nextMonthYear).toStrictEqual(['Aug', 2020]);
    
    });
  })

})
  