class Calendar {
  constructor(month, holidayCalculator) {
    this.#initMonth(month);
    this.#bindMonthMethods();
    this.setHolidayCalculator(holidayCalculator);
  }

  choosePrevMonth() {
    this.month.choosePrevMonth();
    this.holidayCalculator.setYear(this.month.getYear());
  }

  chooseNextMonth() {
    this.month.chooseNextMonth();
    this.holidayCalculator.setYear(this.month.getYear());
  }

  getYear() {
    return this.month.getYear();
  }

  getMonth() {
    return this.month.getMonth();
  }

  getPrevMonthDays() {
    let prevMonth = new Date(this.month.getYear(), this.month.getMonth(), 0);
    return prevMonth.getDate();
  }

  getNextMonthDays() {
    let nextMonth = new Date(
      this.month.getYear(),
      this.month.getMonth() + 1,
      0
    );
    return nextMonth.getDate();
  }

  getDateObject() {
    return new Date(this.getYear(), this.getMonth());
  }

  getLeadingWeekDaysFromPrevMonth() {
    return (this.month.getFirstWeekDay() + 6) % 7;
  }

  getTrailingWeekDaysFromNextMonth() {
    return 6 - ((this.month.getLastWeekDay() + 6) % 7);
  }

  getDaysSinceStartOfYear(day) {
    let days = 0;
    let leapDay = this.isLeapYear() ? 1 : 0;
    // Use the knuckle mnemonic to get the # of days in a month.
    for (let m = Months.JANUARY; m < day.getMonth(); m++) {
      if (m == Months.FEBRUARY) days += 28 + leapDay;
      else if ((m % 7) % 2 == 0) days += 31;
      else days += 30;
    }
    return days + day.getDate();
  }

  getDaysTillEndOfYear(day) {
    return (
      365 -
      this.getDaysSinceStartOfYear(day) +
      (this.isLeapYear(day.getFullYear()) ? 1 : 0)
    );
  }

  getHolidayName(day) {
    if (!this.holidayCalculator) return "";
    return this.holidayCalculator.getHoliday(day);
  }

  isToday(day) {
    const today = new Date();
    return (
      day.getFullYear() === today.getFullYear() &&
      day.getMonth() === today.getMonth() &&
      day.getDate() === today.getDate()
    );
  }

  isLeapYear() {
    if (this.month.getYear() % 4 != 0) return false;
    if (this.month.getYear() % 100 != 0) return true;
    return this.month.getYear() % 400 == 0;
  }

  isHoliday(day) {
    if (!this.holidayCalculator) return false;
    return this.holidayCalculator.isHoliday(day);
  }

  setHolidayCalculator(holidayCalculator) {
    this.holidayCalculator = holidayCalculator;
    this.holidayCalculator.setYear(this.month.getYear());
  }

  setMonth(month) {
    this.#initMonth(month);
    this.holidayCalculator.setYear(this.month.getYear());
  }

  #initMonth(month) {
    if (!month || month === undefined) month = new Date();
    this.date = month;
    this.month = new Month(month);
  }

  #bindMonthMethods() {
    ["getDaysInMonth", "getFirstWeekDay", "getLastWeekDay"].forEach(
      (method) => {
        this[method] = this.month[method].bind(this.month);
      }
    );
  }
}
