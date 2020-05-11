import React from 'react';
import App from '../client/src/components/App.jsx';
import styles from '../styles/App.css';
import Calendar from '../client/src/components/Calendar.jsx';
import Adults from '../client/src/components/Adults.jsx';
import Options from '../client/src/components/Options.jsx';
import SelectHeader from '../client/src/components/SelectHeader.jsx';
import PlanFooter from '../client/src/components/PlanFooter.jsx';

//jest.mock must be in the same scope as the require/import statement
jest.mock('../client/src/helpers/http.js');
let wrapper;
let AppInstance;

beforeEach(() => {
  wrapper = shallow(<App />);
  AppInstance = wrapper.instance();
})
describe('tests for App component', () => {

  test('should always render Header component', () => {
    expect(wrapper.find(SelectHeader)).toHaveLength(1);
  });

  test('should always render Footer component', () => {
    expect(wrapper.find(PlanFooter)).toHaveLength(1);
  })
  test('should render Calendar component when state showCalendar is true', () => {
    wrapper.setState({        
      showCalendar: true,
      showAdults: false,
      showOptions:false,});
    expect(wrapper.find(Calendar)).toHaveLength(1);
  });
  test('should render Calendar component when state showCalendar is true', () => {
    wrapper.setState({        
      showCalendar: true,
      showAdults: false,
      showOptions:false,});
    expect(wrapper.find(Calendar)).toHaveLength(1);
  });
  test('should render Options component when state showOptions is true', () => {
    wrapper.setState({        
      showCalendar: false,
      showAdults: false,
      showOptions:true,
    });
    expect(wrapper.find(Options)).toHaveLength(1);
  });

  test('should render Adults component when state showAdults is true', () => {
    wrapper.setState({        
      showCalendar: false,
      showAdults: true,
      showOptions:false,
    });
    expect(wrapper.find(Adults)).toHaveLength(1);
  });

  test('should not render Adults Calendar or Options components when their state is false', ()=>{
    wrapper.setState({        
        showCalendar: false,
        showAdults: false,
        showOptions: false,
    });
    expect(wrapper.find(Adults)).toHaveLength(0);
    expect(wrapper.find(Options)).toHaveLength(0);
    expect(wrapper.find(Calendar)).toHaveLength(0);
  });

  test('should invoke getStartInfo function when App component mount', () => {
    jest.spyOn(AppInstance, 'getStartInfo');
    // mock obj method
    AppInstance.componentDidMount();
    expect(AppInstance.getStartInfo).toHaveBeenCalled();
  });

  test('getStartInfo function should fetch data from api and set correct state', () => {
    AppInstance.getStartInfo();
    expect(AppInstance.state.tripData).toEqual({
      cancelation: 48, 
      "date": 20200515, 
      "detail": "7:00 am Departure - a day trip at Philadelphia pick up included!", 
      "duration": "7:00 am Departure - 4:00pm", 
      "price": 199, 
      "totalbooked": 2025, 
      "tripname": "a nice day trip at Philadelphia"
    });
  });

  test('getTripPrice function should fetch data from api and set correct state', () => {
    AppInstance.getTripPrice();
    expect(AppInstance.state.tripData).toEqual({
      cancelation: 48, 
      "date": 20200515, 
      "detail": "7:00 am Departure - a day trip at Philadelphia pick up included!", 
      "duration": "7:00 am Departure - 4:00pm", 
      "price": 199, 
      "totalbooked": 2025, 
      "tripname": "a nice day trip at Philadelphia"
    });
  });

  test('getTripPrice function should set the state of spinner to true in the begining', () => {
    AppInstance.getTripPrice();
    expect(AppInstance.state.spinner).toEqual(true);
  })

 test('handleCalendarClick function should change the correct state', () => {
    AppInstance.handleDayClick(15, 'May', 2020);
    expect(AppInstance.state.showCalendar).toEqual(false);
    expect(AppInstance.state.showAdults).toEqual(true);
    expect(AppInstance.state.showOptions).toEqual(false);
    expect(AppInstance.state.selectDate).toEqual(['May', 15, 2020])
  });

 test('minusOne function should change the correct state', () => {
    AppInstance.minusOne({target: {name: 'selectAdults'}});
    expect(AppInstance.state.selectAdults).toEqual(1);
    AppInstance.minusOne({target: {name: 'selectChild'}});
    expect(AppInstance.state.selectChild).toEqual(0);
  });

 test('plusOne function should change the correct state', () => {
    AppInstance.plusOne({target: {name: 'selectAdults'}});
    expect(AppInstance.state.selectAdults).toEqual(3);
    AppInstance.plusOne({target: {name: 'selectChild'}});
    expect(AppInstance.state.selectChild).toEqual(1);
  });

 test('handleCalendarClick function should change the correct state', () => {
    AppInstance.handleCalendarClick();
    expect(AppInstance.state.showCalendar).toEqual(true);
    expect(AppInstance.state.showAdults).toEqual(false);
    expect(AppInstance.state.showOptions).toEqual(false);
  });

  test('go next function should set the correct state', () => {
    wrapper.setState({        
      showCalendar: true,
      showAdults: false,
      showOptions:false,
    });
    AppInstance.goNext();
    expect(AppInstance.state.showAdults).toEqual(true);

    wrapper.setState({        
      showCalendar: false,
      showAdults: true,
      showOptions:false,
    });
    AppInstance.goNext();
    expect(AppInstance.state.showOptions).toEqual(true);

    wrapper.setState({        
      showCalendar: false,
      showAdults: false,
      showOptions:true,
    });
    AppInstance.goNext();
    expect(AppInstance.state.showOptions).toEqual(false);

  });
});
