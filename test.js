//const script = require('./script.js');
//import * as script from './script.js';
//import { GermanHolidayCalculator } from './script.js';

const { GermanHolidayCalculator, germany, Months, StateIds } = require('./script.js');

holidayCalculator = new GermanHolidayCalculator(
    2027,
    germany.StateIds.SAXONY
  );

test('Test calculation of Day of Repetence and Prayer', () => {
    const expected = new Date(2027, Months.NOVEMBER, 17);
    const result = holidayCalculator.calculateRepetanceAndPrayerDay();
  expect(result.getDate() === expected.getDate() && result.getMonth() === expected.getMonth() && result.getFullYear() === expected.getFullYear()).toBeTruthy();
});
