import React from 'react';
import MonthDate from "../client/src/components/MonthDate";
import Months from '../client/src/components/Months.jsx';
import Days from '../client/src/components/Days.jsx';

const sampleMonthYear = ['May', 2020];
test('should render Months and Days components', () => {
  const wrapper = shallow(
    <MonthDate
      monthYear={sampleMonthYear}
      handleDayClick={() => {}}
    />
  );
  expect(wrapper.find(Months)).toHaveLength(1);
  expect(wrapper.find(Days)).toHaveLength(1);
  expect(wrapper.find('.month')).toHaveLength(1);
  expect(wrapper.find('.date')).toHaveLength(1);
});