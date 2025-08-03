const Months = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
};

function createGermanyObject() {
  const StateIds = {
    BAVARIA: 0,
    BADEN_WUERTTEMBERG: 1,
    BERLIN: 2,
    BRANDENBURG: 3,
    BREMEN: 4,
    HAMBURG: 5,
    HESSE: 6,
    LOWER_SAXONY: 7,
    MECKLENBURG_WESTERN_POMERANIA: 8,
    NORTH_RHINE_WESTPHALIA: 9,
    RHINELAND_PALATINATE: 10,
    SAARLAND: 11,
    SAXONY: 12,
    SAXONY_ANHALT: 13,
    SCHLESWIG_HOLSTEIN: 14,
    THURINGIA: 15,
  };

  const States = [
    { id: StateIds.BAVARIA, name: "Bavaria" },
    { id: StateIds.BADEN_WUERTTEMBERG, name: "Baden-Württemberg" },
    { id: StateIds.BERLIN, name: "Berlin" },
    { id: StateIds.BRANDENBURG, name: "Brandenburg" },
    { id: StateIds.BREMEN, name: "Bremen" },
    { id: StateIds.HAMBURG, name: "Hamburg" },
    { id: StateIds.HESSE, name: "Hesse" },
    { id: StateIds.LOWER_SAXONY, name: "Lower Saxony" },
    {
      id: StateIds.MECKLENBURG_WESTERN_POMERANIA,
      name: "Mecklenburg-Western Pomerania",
    },
    {
      id: StateIds.NORTH_RHINE_WESTPHALIA,
      name: "North Rhine-Westphalia",
    },
    { id: StateIds.RHINELAND_PALATINATE, name: "Rhineland-Palatinate" },
    { id: StateIds.SAARLAND, name: "Saarland" },
    { id: StateIds.SAXONY, name: "Saxony" },
    { id: StateIds.SAXONY_ANHALT, name: "Saxony-Anhalt" },
    { id: StateIds.SCHLESWIG_HOLSTEIN, name: "Schleswig-Holstein" },
    { id: StateIds.THURINGIA, name: "Thuringia" },
  ];

  const HolidayNames = {
    NEW_YEAR: "New Year's Day",
    ABOR_DAY: "Labor Day",
    GERMAN_UNITY_DAY: "German Unity Day",
    CHRISTMAS_DAY: "Christmas Day",
    BOXING_DAY: "Boxing Day",
    EASTER_SUNDAY: "Easter Sunday",
    EASTER_MONDAY: "Easter Monday",
    ASCENSION_DAY: "Ascension Day",
    WHIT_MONDAY: "Whit Monday",
    EPIPHANY: "Epiphany",
    ALL_SAINTS_DAY: "All Saints' Day",
    GOOD_FRIDAY: "Good Friday",
    REFORMATION_DAY: "Reformation Day",
    REPUBLIC_DAY: "Republic Day",
    WOMENS_DAY: "Women's Day",
    ASSUMPTION_DAY: "Assumption Day",
    REPENTANCE_AND_PRAYER_DAY: "Day of Repentance and Prayer",
  };
  const GeneralHolidays = [
    { month: Months.JANUARY, day: 1, name: HolidayNames.NEW_YEAR },
    { month: Months.MAY, day: 1, name: HolidayNames.LABOR_DAY },
    {
      month: Months.OCTOBER,
      day: 3,
      name: HolidayNames.GERMAN_UNITY_DAY,
    },
    {
      month: Months.DECEMBER,
      day: 25,
      name: HolidayNames.CHRISTMAS_DAY,
    },
    { month: Months.DECEMBER, day: 26, name: HolidayNames.BOXING_DAY },
    { easterOffset: 0, name: HolidayNames.EASTER_SUNDAY },
    { easterOffset: 1, name: HolidayNames.EASTER_MONDAY },
    { easterOffset: -2, name: HolidayNames.GOOD_FRIDAY },
    { easterOffset: 39, name: HolidayNames.ASCENSION_DAY },
    { easterOffset: 50, name: HolidayNames.WHIT_MONDAY },
  ];

  const StateHolidays = [
    {
      states: [
        StateIds.BAVARIA,
        StateIds.BADEN_WUERTTEMBERG,
        StateIds.NORTH_RHINE_WESTPHALIA,
        StateIds.RHINELAND_PALATINATE,
        StateIds.SAARLAND,
      ],
      holidays: [
        {
          month: Months.NOVEMBER,
          day: 1,
          name: HolidayNames.ALL_SAINTS_DAY,
        },
      ],
    },
    {
      states: [
        StateIds.BAVARIA,
        StateIds.BADEN_WUERTTEMBERG,
        StateIds.SAXONY_ANHALT,
      ],
      holidays: [
        { month: Months.JANUARY, day: 6, name: HolidayNames.EPIPHANY },
      ],
    },
    {
      states: [
        StateIds.BRANDENBURG,
        StateIds.BREMEN,
        StateIds.HAMBURG,
        StateIds.LOWER_SAXONY,
        StateIds.MECKLENBURG_WESTERN_POMERANIA,
        StateIds.SAXONY,
        StateIds.SAXONY_ANHALT,
        StateIds.SCHLESWIG_HOLSTEIN,
        StateIds.THURINGIA,
      ],
      holidays: [
        {
          month: Months.OCTOBER,
          day: 31,
          name: HolidayNames.REFORMATION_DAY,
        },
      ],
    },
    {
      states: [StateIds.BERLIN],
      holidays: [
        { month: Months.MARCH, day: 8, name: HolidayNames.WOMENS_DAY },
      ],
    },
    {
      states: [StateIds.SAARLAND],
      holidays: [
        {
          month: Months.AUGUST,
          day: 15,
          name: HolidayNames.ASSUMPTION_DAY,
        },
      ],
    },
    {
      states: [StateIds.SAXONY],
      holidays: [
        {
          month: Months.NOVEMBER,
          name: HolidayNames.REPENTANCE_AND_PRAYER_DAY,
        },
      ],
    },
  ];
  return {
    StateIds,
    HolidayNames,
    States,
    GeneralHolidays,
    StateHolidays,
  };
}

const Germany = createGermanyObject();

class GermanHolidayCalculator {
  constructor(year, stateId) {
    if (year === undefined || !year) {
      date = new Date();
      year = date.getFullYear();
    }
    this.stateId = stateId || Germany.StateIds.BAVARIA;
    this.year = year;
    this.#init();
  }

  setYear(year) {
    if (year == this.year) return;
    this.year = year;
    this.#init();
  }

  setStateId(stateId) {
    this.stateId = stateId;
    this.#init();
  }

  #init() {
    this.easterSunday = this.calculateEasterSunday(this.year);
    this.holidays = [];
    this.addHolidays();
  }

  addHolidays() {
    this.addGeneralHolidays();
    this.addStateHolidays();
  }

  getHoliday(day) {
    let rec = this.holidays.find((holiday) =>
      this.compareDays(holiday.date, day)
    );
    return rec ? rec.holiday : "";
  }

  isHoliday(day) {
    return this.holidays.some((holiday) => this.compareDays(holiday.date, day));
  }

  addGeneralHolidays() {
    for (const holiday of Germany.GeneralHolidays) this.addHoliday(holiday);
  }

  addStateHolidays() {
    Germany.StateHolidays.forEach((entry) => {
      if (entry.states.includes(this.stateId)) {
        for (const holiday of entry.holidays) this.addHoliday(holiday);
      }
    });
  }

  addHoliday(holiday) {
    const date = this.calculateDate(holiday);
    const rec = { date: date, holiday: holiday.name };
    this.holidays.push(rec);
  }

  calculateDate(holiday) {
    if (holiday.easterOffset !== undefined)
      return new Date(
        this.year,
        this.easterSunday.getMonth(),
        this.easterSunday.getDate() + holiday.easterOffset
      );
    if (holiday.name == Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY)
      return this.calculateRepentanceAndPrayerDay();
    return new Date(this.year, holiday.month, holiday.day);
  }

  compareDays(day1, day2) {
    return (
      day1.getDate() === day2.getDate() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getFullYear() === day2.getFullYear()
    );
  }

  calculateRepentanceAndPrayerDay() {
    // The Day of Repentance and Prayer is the first Wednesday between Nov. 16 and Nov. 22
    let offset = 0;
    const wednesday = 2;
    const startDate = new Date(this.year, Months.NOVEMBER, 16);
    // Make Monday day 0, Tuesday  1, etc.
    const startDateShifted = (startDate.getDay() + 6) % 7;
    if (startDateShifted <= wednesday) offset = wednesday - startDateShifted;
    else offset = 7 - (startDateShifted - wednesday);
    return new Date(this.year, Months.NOVEMBER, 16 + offset);
  }

  // Calculate Easter Sunday using the Spencer algorithm.
  calculateEasterSunday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const n = Math.floor((h + l - 7 * m + 114) / 31);
    const o = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(year, n - 1, o);
  }
}

class Month {
  constructor(month) {
    if (!month || month === undefined) month = new Date();
    this.month = month;
    this.#init();
  }

  getYear() {
    return this.month.getFullYear();
  }

  getDaysInMonth() {
    return this.daysInMonth;
  }

  getFirstWeekDay() {
    return this.firstWeekday;
  }

  getLastWeekDay() {
    return this.lastWeekDay;
  }

  choosePrevMonth() {
    this.month = new Date(this.month.getFullYear(), this.month.getMonth() - 1);
    this.#init();
  }

  chooseNextMonth() {
    this.month = new Date(this.month.getFullYear(), this.month.getMonth() + 1);
    this.#init();
  }

  #init() {
    const firstDay = new Date(
      this.month.getFullYear(),
      this.month.getMonth(),
      1
    );
    const lastDay = new Date(
      this.month.getFullYear(),
      this.month.getMonth() + 1,
      0
    );
    this.daysInMonth = lastDay.getDate();
    this.firstWeekday = firstDay.getDay();
    this.lastWeekDay = lastDay.getDay();
    this.days = [];
    this.addDays();
  }

  addDays() {
    for (let i = 0; i < this.daysInMonth; i++)
      this.days.push(
        new Date(this.month.getFullYear(), this.month.getMonth(), i + 1)
      );
  }
}

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

  /*
   * 
   * \begin{align*}
   * &m = month - 1 \\
   * &y = year \\
   * &a = \left\lfloor (3 - (y\mod{(4)}) ) / 3\right\rfloor \\
   * &b = \left\lfloor y / 4\right\rfloor \\
   * &c = \left\lfloor(24 - (b\mod{(25)})) / 24\right\rfloor \\
   * &d = \left\lfloor(99 - (b\mod{(100)})) /99\right\rfloor \\
   * &l = a(cd + 1 - c) \\
   * &e = \left\lfloor m / 7\right\rfloor \\
   * &f = m\mod{(7)} \\
   * &g = \left\lfloor f / 2\right\rfloor \\
   * &h = f\mod{(2)} \\
   * &j = g - \left\lfloor g / 2\right\rfloor \\
   * &k = j - \left\lfloor j / 2\right\rfloor \\
   * &i = 212e + 61g + 31h -2k(1 - e) + l + day \\
   * \end{align*}
   */
  getDaysSinceStartOfYear2(day, month) {
    let m = month - 1;
    let y = this.month.getYear();
    let a = Math.floor((3 - (y % 4)) / 3);
    let b = Math.floor(y / 4);
    let c = Math.floor((24 - (b % 25)) / 24);
    let d = Math.floor((99 - (b % 100)) / 99);
    let l = a * (c * d + 1 - c);
    let e = Math.floor(m / 7);
    let f = m % 7;
    let g = Math.floor(f / 2);
    let h = f % 2;
    let j = g - Math.floor(g / 2);
    let k = j - Math.floor(j / 2);
    let i = 212 * e + 61 * g + 31 * h + (1 - e) * k * (-2) + l + day;
    console.log(i);
    return i;
  }
  
  getDaysSinceStartOfYear3(day, month) {
    let m = month - 1;
    let e = Math.floor(m / 7);
    let f = m % 7;
    let g = f % 2;
    let h = Math.floor(f / 2);
    let days = e * 212 + h * 61 + g * 31 + day.getDate() + (this.isLeapYear() ? 1 : 0);
    if (h > 0) days -= 2;
    console.log(days);
    return days;
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
      day.date.getFullYear() === today.getFullYear() &&
      day.date.getMonth() === today.getMonth() &&
      day.date.getDate() === today.getDate()
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

function init() {
  const today = new Date();
  const holidayCalculator = new GermanHolidayCalculator(
    today.getFullYear(),
    Germany.StateIds.HESSE
  );
  const calendar = new Calendar(new Date(), holidayCalculator);
  calendar.getDaysSinceStartOfYear2(5, 11);
  calendar.getDaysSinceStartOfYear2(5, 11);

  const weekDay = today.toLocaleDateString("de-DE", { weekday: "long" });
  const nthDayOfWeek = ((today.getDay() + 6) % 7) + 1;
  const numericDate = today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const monthYearStr = today.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
  const dayMonthStr = today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
  });
  const leapYearStr =
    " (der " +
    (calendar.getDaysSinceStartOfYear(today) + 1) +
    ". Tag in Schaltjahren)";

  const replacements = [
    { query: '[date="numeric-date"]', val: numericDate },
    { query: '[date="day-month"]', val: dayMonthStr },
    {
      query: '[count="days-since"]',
      val: calendar.getDaysSinceStartOfYear(today),
    },
    {
      query: '[count="days-remain"]',
      val: calendar.getDaysTillEndOfYear(today),
    },
    { query: '[date="day-of-week"]', val: weekDay },
    { query: '[date="nth-day-of-week"]', val: nthDayOfWeek },
  ];

  for (r of replacements) {
    for (const e of document.querySelectorAll(r.query)) {
      e.innerHTML = r.val;
    }
  }

  let e = document.getElementById("calendar_head_month_year");
  if (e) e.innerHTML = monthYearStr;
  e = document.getElementById("is-holiday");
  if (e) e.innerHTML = calendar.isHoliday(today) ? "ein" : "kein";
  e = document.getElementById("days-with-leap-text");
  if (e) e.innerHTML = !calendar.isLeapYear(today) ? leapYearStr : "";
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    GermanHolidayCalculator,
    Month,
    Calendar,
    Germany,
    Months,
  };
} else {
  window.onload = function () {
    init();
  };
}
