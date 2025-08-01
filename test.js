const { 
  GermanHolidayCalculator, 
  Month, 
  Calendar, 
  Germany, 
  Months, 
} = require('./script.js');

describe('GermanHolidayCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new GermanHolidayCalculator(2025, Germany.StateIds.BAVARIA);
  });

  describe('Constructor', () => {
    test('should initialize with current year if no year provided', () => {
      const currentYear = new Date().getFullYear();
      const calc = new GermanHolidayCalculator();
      expect(calc.year).toBe(currentYear);
      expect(calc.stateId).toBe(Germany.StateIds.BAVARIA);
    });

    test('should initialize with provided year and state', () => {
      const calc = new GermanHolidayCalculator(2024, Germany.StateIds.BERLIN);
      expect(calc.year).toBe(2024);
      expect(calc.stateId).toBe(Germany.StateIds.BERLIN);
    });
  });

  describe('Easter Calculation', () => {
    test('should calculate Easter Sunday correctly for 2025', () => {
      const easter = calculator.calculateEasterSunday(2025);
      expect(easter.getFullYear()).toBe(2025);
      expect(easter.getMonth()).toBe(3); // April (0-based)
      expect(easter.getDate()).toBe(20);
    });

    test('should calculate Easter Sunday correctly for 2024', () => {
      const easter = calculator.calculateEasterSunday(2024);
      expect(easter.getFullYear()).toBe(2024);
      expect(easter.getMonth()).toBe(2); // March (0-based)
      expect(easter.getDate()).toBe(31);
    });

    test('should calculate Easter Sunday correctly for 2026', () => {
      const easter = calculator.calculateEasterSunday(2026);
      expect(easter.getFullYear()).toBe(2026);
      expect(easter.getMonth()).toBe(3); // April (0-based)
      expect(easter.getDate()).toBe(5);
    });
  });

  describe('General Holidays', () => {
    test('should recognize New Year\'s Day', () => {
      const newYear = new Date(2025, 0, 1); // Jan 1, 2025
      expect(calculator.isHoliday(newYear)).toBe(true);
      expect(calculator.getHoliday(newYear)).toBe(Germany.HolidayNames.NEW_YEAR);
    });

    test('should recognize Labor Day', () => {
      const laborDay = new Date(2025, 4, 1); // May 1, 2025
      expect(calculator.isHoliday(laborDay)).toBe(true);
      expect(calculator.getHoliday(laborDay)).toBe(Germany.HolidayNames.LABOR_DAY);
    });

    test('should recognize German Unity Day', () => {
      const unityDay = new Date(2025, 9, 3); // Oct 3, 2025
      expect(calculator.isHoliday(unityDay)).toBe(true);
      expect(calculator.getHoliday(unityDay)).toBe(Germany.HolidayNames.GERMAN_UNITY_DAY);
    });

    test('should recognize Christmas Day', () => {
      const christmas = new Date(2025, 11, 25); // Dec 25, 2025
      expect(calculator.isHoliday(christmas)).toBe(true);
      expect(calculator.getHoliday(christmas)).toBe(Germany.HolidayNames.CHRISTMAS_DAY);
    });

    test('should recognize Boxing Day', () => {
      const boxingDay = new Date(2025, 11, 26); // Dec 26, 2025
      expect(calculator.isHoliday(boxingDay)).toBe(true);
      expect(calculator.getHoliday(boxingDay)).toBe(Germany.HolidayNames.BOXING_DAY);
    });
  });

  describe('Easter-dependent Holidays', () => {
    test('should recognize Good Friday', () => {
      const goodFriday = new Date(2025, 3, 18); // April 18, 2025 (Easter - 2 days)
      expect(calculator.isHoliday(goodFriday)).toBe(true);
      expect(calculator.getHoliday(goodFriday)).toBe(Germany.HolidayNames.GOOD_FRIDAY);
    });

    test('should recognize Easter Monday', () => {
      const easterMonday = new Date(2025, 3, 21); // April 21, 2025 (Easter + 1 day)
      expect(calculator.isHoliday(easterMonday)).toBe(true);
      expect(calculator.getHoliday(easterMonday)).toBe(Germany.HolidayNames.EASTER_MONDAY);
    });

    test('should recognize Ascension Day', () => {
      const ascensionDay = new Date(2025, 4, 29); // May 29, 2025 (Easter + 39 days)
      expect(calculator.isHoliday(ascensionDay)).toBe(true);
      expect(calculator.getHoliday(ascensionDay)).toBe(Germany.HolidayNames.ASCENSION_DAY);
    });

    test('should recognize Whit Monday', () => {
      const whitMonday = new Date(2025, 5, 9); // June 9, 2025 (Easter + 50 days)
      expect(calculator.isHoliday(whitMonday)).toBe(true);
      expect(calculator.getHoliday(whitMonday)).toBe(Germany.HolidayNames.WHIT_MONDAY);
    });
  });

  describe('State-specific Holidays', () => {
    test('should recognize Epiphany in Bavaria', () => {
      const epiphany = new Date(2025, 0, 6); // Jan 6, 2025
      expect(calculator.isHoliday(epiphany)).toBe(true);
      expect(calculator.getHoliday(epiphany)).toBe(Germany.HolidayNames.EPIPHANY);
    });

    test('should not recognize Epiphany in Berlin', () => {
      const berlinCalc = new GermanHolidayCalculator(2025, Germany.StateIds.BERLIN);
      const epiphany = new Date(2025, 0, 6); // Jan 6, 2025
      expect(berlinCalc.isHoliday(epiphany)).toBe(false);
    });

    test('should recognize Women\'s Day in Berlin', () => {
      const berlinCalc = new GermanHolidayCalculator(2025, Germany.StateIds.BERLIN);
      const womensDay = new Date(2025, 2, 8); // March 8, 2025
      expect(berlinCalc.isHoliday(womensDay)).toBe(true);
      expect(berlinCalc.getHoliday(womensDay)).toBe(Germany.HolidayNames.WOMENS_DAY);
    });

    test('should not recognize Women\'s Day in Bavaria', () => {
      const womensDay = new Date(2025, 2, 8); // March 8, 2025
      expect(calculator.isHoliday(womensDay)).toBe(false);
    });

    test('should recognize All Saints\' Day in Bavaria', () => {
      const allSaints = new Date(2025, 10, 1); // Nov 1, 2025
      expect(calculator.isHoliday(allSaints)).toBe(true);
      expect(calculator.getHoliday(allSaints)).toBe(Germany.HolidayNames.ALL_SAINTS_DAY);
    });

    test('should recognize Reformation Day in Saxony', () => {
      const saxonyCalc = new GermanHolidayCalculator(2025, Germany.StateIds.SAXONY);
      const reformationDay = new Date(2025, 9, 31); // Oct 31, 2025
      expect(saxonyCalc.isHoliday(reformationDay)).toBe(true);
      expect(saxonyCalc.getHoliday(reformationDay)).toBe(Germany.HolidayNames.REFORMATION_DAY);
    });
  });

  describe('Day of Repentance and Prayer', () => {
    test('should calculate Day of Repentance and Prayer correctly for 2025', () => {
      const saxonyCalc = new GermanHolidayCalculator(2025, Germany.StateIds.SAXONY);
      const repentanceDay = saxonyCalc.calculateRepentanceAndPrayerDay();
      expect(repentanceDay.getFullYear()).toBe(2025);
      expect(repentanceDay.getMonth()).toBe(10); // November
      expect(repentanceDay.getDate()).toBe(19); // Should be Nov 19
      expect(repentanceDay.getDay()).toBe(3); // Wednesday
    });

    test('should recognize Day of Repentance and Prayer in Saxony', () => {
      const saxonyCalc2025 = new GermanHolidayCalculator(2025, Germany.StateIds.SAXONY);
      const saxonyCalc2026 = new GermanHolidayCalculator(2026, Germany.StateIds.SAXONY);
      const saxonyCalc2027 = new GermanHolidayCalculator(2027, Germany.StateIds.SAXONY);
      const saxonyCalc2028 = new GermanHolidayCalculator(2028, Germany.StateIds.SAXONY);

      const repentanceDay2025 = new Date(2025, 10, 19);
      const repentanceDay2026 = new Date(2026, 10, 18);
      const repentanceDay2027 = new Date(2027, 10, 17);
      const repentanceDay2028 = new Date(2028, 10, 22);

      expect(saxonyCalc2025.isHoliday(repentanceDay2025)).toBe(true);
      expect(saxonyCalc2025.getHoliday(repentanceDay2025)).toBe(Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY);

      expect(saxonyCalc2026.isHoliday(repentanceDay2026)).toBe(true);
      expect(saxonyCalc2026.getHoliday(repentanceDay2026)).toBe(Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY);
      
      expect(saxonyCalc2027.isHoliday(repentanceDay2027)).toBe(true);
      expect(saxonyCalc2027.getHoliday(repentanceDay2027)).toBe(Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY);

      expect(saxonyCalc2028.isHoliday(repentanceDay2028)).toBe(true);
      expect(saxonyCalc2028.getHoliday(repentanceDay2028)).toBe(Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY);
    });
  });

  describe('Setter Methods', () => {
    test('should update year correctly', () => {
      calculator.setYear(2024);
      expect(calculator.year).toBe(2024);
    });

    test('should update state correctly', () => {
      calculator.setStateId(Germany.StateIds.BERLIN);
      expect(calculator.stateId).toBe(Germany.StateIds.BERLIN);
    });
  });

  describe('Utility Methods', () => {
    test('should compare days correctly', () => {
      const day1 = new Date(2025, 0, 1);
      const day2 = new Date(2025, 0, 1);
      const day3 = new Date(2025, 0, 2);
      
      expect(calculator.compareDays(day1, day2)).toBe(true);
      expect(calculator.compareDays(day1, day3)).toBe(false);
    });
  });
});

describe('Month', () => {
  let month;

  beforeEach(() => {
    month = new Month(new Date(2025, 0, 15)); // January 2025
  });

  test('should initialize correctly with no month provided', () => {
    month = new Month();
    let today = new Date();
    expect(month.getYear()).toBe(today.getFullYear());
  });

  test('should initialize correctly', () => {
    expect(month.daysInMonth).toBe(31);
    expect(month.firstWeekday).toBe(3); // January 1, 2025 is a Wednesday
    expect(month.days).toHaveLength(31);
  });

  test('should navigate to previous month', () => {
    month.choosePrevMonth();
    expect(month.month.getMonth()).toBe(11); // December
    expect(month.month.getFullYear()).toBe(2024);
    expect(month.daysInMonth).toBe(31);
  });

  test('should navigate to next month', () => {
    month.chooseNextMonth();
    expect(month.month.getMonth()).toBe(1); // February
    expect(month.month.getFullYear()).toBe(2025);
    expect(month.daysInMonth).toBe(28); // 2025 is not a leap year
  });

  test('should get year correctly', () => {
    expect(month.getYear()).toBe(2025);
  });

  test('should get first week day correctly', () => {
    expect(month.getFirstWeekDay()).toBe(3);
  });

  test('should get last week day correctly', () => {
    expect(month.getLastWeekDay()).toBe(5);
  });

  test('should handle leap year February', () => {
    const leapMonth = new Month(new Date(2024, 1, 15)); // February 2024
    expect(leapMonth.daysInMonth).toBe(29);
  });
});

describe('Calendar', () => {
  let calendar;
  let holidayCalculator;

  beforeEach(() => {
    holidayCalculator = new GermanHolidayCalculator(2025, Germany.StateIds.BAVARIA);
    calendar = new Calendar(new Date(2025, 0), holidayCalculator); // January 2025
  });

  test('should initialize correctly', () => {
    expect(calendar.month).toBeDefined();
    expect(calendar.holidayCalculator).toBeDefined();
  });

  test('should check if day is holiday', () => {
    const newYear = new Date(2025, 0, 1);
    const regularDay = new Date(2025, 0, 2);
    
    expect(calendar.isHoliday(newYear)).toBe(true);
    expect(calendar.isHoliday(regularDay)).toBe(false);
  });

  test('should get holiday name', () => {
    const newYear = new Date(2025, 0, 1);
    const regularDay = new Date(2025, 0, 2);
    
    expect(calendar.getHolidayName(newYear)).toBe(Germany.HolidayNames.NEW_YEAR);
    expect(calendar.getHolidayName(regularDay)).toBe("");
  });

  test('should check leap year correctly', () => {
    const leapYearCalendar2024 = new Calendar(new Date(2024, 0, 15), holidayCalculator);
    const leapYearCalendar2000 = new Calendar(new Date(2000, 0, 15), holidayCalculator);
    const regularYearCalendar2025 = new Calendar(new Date(2025, 0, 15), holidayCalculator);
    const regularYearCalendar1900 = new Calendar(new Date(1900, 0, 15), holidayCalculator);

    expect(leapYearCalendar2024.isLeapYear()).toBe(true);
    expect(leapYearCalendar2000.isLeapYear()).toBe(true);
    expect(regularYearCalendar2025.isLeapYear()).toBe(false);
    expect(regularYearCalendar1900.isLeapYear()).toBe(false);
  });

  test('should calculate day of year correctly', () => {
    const jan1 = new Date(2025, 0, 1);
    const jan31 = new Date(2025, 0, 31);
    const feb1 = new Date(2025, 1, 1);
    const dec31 = new Date(2025, 11, 31);
    const jul31 = new Date(2025, 6, 31);
    const oct8 = new Date(2025, 9, 8);
    const leapYearDay = new Date(2024, 7, 1);
    const leapYearCalendar = new Calendar(new Date(2024, 7), holidayCalculator);

    expect(calendar.getDaysSinceStartOfYear(jan1)).toBe(1);
    expect(calendar.getDaysSinceStartOfYear(jan31)).toBe(31);
    expect(calendar.getDaysSinceStartOfYear(feb1)).toBe(32);
    expect(calendar.getDaysSinceStartOfYear(jul31)).toBe(212);
    expect(calendar.getDaysSinceStartOfYear(oct8)).toBe(281);
    expect(calendar.getDaysSinceStartOfYear(dec31)).toBe(365);
    expect(leapYearCalendar.getDaysSinceStartOfYear(leapYearDay)).toBe(214);
  });

test('should calculate remaining days of year correctly', () => {
    const jul31 = new Date(2025, 6, 31);
    const oct8 = new Date(2025, 9, 8);
    expect(calendar.getDaysTillEndOfYear(jul31)).toBe(153);
    expect(calendar.getDaysTillEndOfYear(oct8)).toBe(84);
  });

  test('should set month correctly', () => {
    const newMonth = new Date(2025, 5, 15); // June 2025
    calendar.setMonth(newMonth);
    
    expect(calendar.month.month.getMonth()).toBe(5);
    expect(calendar.month.month.getFullYear()).toBe(2025);
  });
});

describe('Constants and Data Structures', () => {
  test('should have correct month constants', () => {
    expect(Months.JANUARY).toBe(0);
    expect(Months.DECEMBER).toBe(11);
  });

  test('should have all German states', () => {
    expect(Germany.States).toHaveLength(16);
    expect(Germany.States[0].name).toBe("Bavaria");
  });
});

describe('Edge Cases', () => {
  test('should handle year boundaries correctly', () => {
    const calc2024 = new GermanHolidayCalculator(2024, Germany.StateIds.BAVARIA);
    const calc2025 = new GermanHolidayCalculator(2025, Germany.StateIds.BAVARIA);
    
    const newYear2024 = new Date(2024, 0, 1);
    const newYear2025 = new Date(2025, 0, 1);
    
    expect(calc2024.isHoliday(newYear2024)).toBe(true);
    expect(calc2024.isHoliday(newYear2025)).toBe(false);
    expect(calc2025.isHoliday(newYear2025)).toBe(true);
    expect(calc2025.isHoliday(newYear2024)).toBe(false);
  });

  test('should handle century leap years correctly', () => {
    const calendar1900 = new Calendar(new Date(1900, 0, 15), new GermanHolidayCalculator(1900));
    const calendar2000 = new Calendar(new Date(2000, 0, 15), new GermanHolidayCalculator(2000));
    
    expect(calendar1900.isLeapYear()).toBe(false); // 1900 is not a leap year
    expect(calendar2000.isLeapYear()).toBe(true);  // 2000 is a leap year
  });
});