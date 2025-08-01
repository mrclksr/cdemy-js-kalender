const germany = {};

const Constants = {
  MILLISECONDS_PER_DAY: 24 * 60 * 60 * 1000,
};

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

germany.StateIds = Object.freeze({
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
});

germany.States = Object.freeze([
  { id: germany.StateIds.BAVARIA, name: "Bavaria" },
  { id: germany.StateIds.BADEN_WUERTTEMBERG, name: "Baden-Württemberg" },
  { id: germany.StateIds.BERLIN, name: "Berlin" },
  { id: germany.StateIds.BRANDENBURG, name: "Brandenburg" },
  { id: germany.StateIds.BREMEN, name: "Bremen" },
  { id: germany.StateIds.HAMBURG, name: "Hamburg" },
  { id: germany.StateIds.HESSE, name: "Hesse" },
  { id: germany.StateIds.LOWER_SAXONY, name: "Lower Saxony" },
  {
    id: germany.StateIds.MECKLENBURG_WESTERN_POMERANIA,
    name: "Mecklenburg-Western Pomerania",
  },
  {
    id: germany.StateIds.NORTH_RHINE_WESTPHALIA,
    name: "North Rhine-Westphalia",
  },
  { id: germany.StateIds.RHINELAND_PALATINATE, name: "Rhineland-Palatinate" },
  { id: germany.StateIds.SAARLAND, name: "Saarland" },
  { id: germany.StateIds.SAXONY, name: "Saxony" },
  { id: germany.StateIds.SAXONY_ANHALT, name: "Saxony-Anhalt" },
  { id: germany.StateIds.SCHLESWIG_HOLSTEIN, name: "Schleswig-Holstein" },
  { id: germany.StateIds.THURINGIA, name: "Thuringia" },
]);

germany.HolidayNames = Object.freeze({
  NEW_YEAR: "New Year's Day",
  LABOR_DAY: "Labor Day",
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
});

germany.GeneralHolidays = Object.freeze([
  { month: Months.JANUARY, day: 1, name: germany.HolidayNames.NEW_YEAR },
  { month: Months.MAY, day: 1, name: germany.HolidayNames.LABOR_DAY },
  {
    month: Months.MAY,
    easterOffset: 39,
    name: germany.HolidayNames.ASCENSION_DAY,
  },
  {
    month: Months.JUNE,
    easterOffset: 50,
    name: germany.HolidayNames.WHIT_MONDAY,
  },
  {
    month: Months.OCTOBER,
    day: 3,
    name: germany.HolidayNames.GERMAN_UNITY_DAY,
  },
  { month: Months.DECEMBER, day: 25, name: germany.HolidayNames.CHRISTMAS_DAY },
  { month: Months.DECEMBER, day: 26, name: germany.HolidayNames.BOXING_DAY },
  { easterOffset: 0, name: germany.HolidayNames.EASTER_SUNDAY },
  { easterOffset: 1, name: germany.HolidayNames.EASTER_MONDAY },
  { easterOffset: -2, name: germany.HolidayNames.GOOD_FRIDAY },
]);

germany.StateHolidays = Object.freeze([
  {
    states: [
      germany.StateIds.BAVARIA,
      germany.StateIds.BADEN_WUERTTEMBERG,
      germany.StateIds.NORTH_RHINE_WESTPHALIA,
      germany.StateIds.RHINELAND_PALATINATE,
      germany.StateIds.SAARLAND,
    ],
    holidays: [
      {
        month: Months.NOVEMBER,
        day: 1,
        name: germany.HolidayNames.ALL_SAINTS_DAY,
      },
    ],
  },
  {
    states: [
      germany.StateIds.BAVARIA,
      germany.StateIds.BADEN_WUERTTEMBERG,
      germany.StateIds.SAXONY_ANHALT,
    ],
    holidays: [
      { month: Months.JANUARY, day: 6, name: germany.HolidayNames.EPIPHANY },
    ],
  },
  {
    states: [
      germany.StateIds.BRANDENBURG,
      germany.StateIds.BREMEN,
      germany.StateIds.HAMBURG,
      germany.StateIds.LOWER_SAXONY,
      germany.StateIds.MECKLENBURG_WESTERN_POMERANIA,
      germany.StateIds.SAXONY,
      germany.StateIds.SAXONY_ANHALT,
      germany.StateIds.SCHLESWIG_HOLSTEIN,
      germany.StateIds.THURINGIA,
    ],
    holidays: [
      {
        month: Months.OCTOBER,
        day: 31,
        name: germany.HolidayNames.REFORMATION_DAY,
      },
    ],
  },
  {
    states: [germany.StateIds.BERLIN],
    holidays: [
      { month: Months.MARCH, day: 8, name: germany.HolidayNames.WOMENS_DAY },
    ],
  },
  {
    states: [germany.StateIds.SAARLAND],
    holidays: [
      {
        month: Months.AUGUST,
        day: 15,
        name: germany.HolidayNames.ASSUMPTION_DAY,
      },
    ],
  },
  {
    states: [germany.StateIds.SAXONY],
    holidays: [
      {
        month: Months.NOVEMBER,
        name: germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY,
      },
    ],
  },
]);

class GermanHolidayCalculator {
  constructor(year, stateId) {
    if (year === undefined || !year) {
      date = new Date();
      year = date.getFullYear();
    }
    this.stateId = stateId || germany.StateIds.BAVARIA;
    this.year = year;
    this.init();
  }

  setYear(year) {
    this.year = year;
    this.init();
  }

  setStateId(stateId) {
    this.stateId = stateId;
    this.init();
  }

  init() {
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
    for (const holiday of germany.GeneralHolidays) this.addHoliday(holiday);
  }

  addStateHolidays() {
    germany.StateHolidays.forEach((entry) => {
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
    if (holiday.name == germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY)
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
    if (startDateShifted < wednesday) offset = wednesday - startDateShifted;
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
    this.month = month;
    this.init();
  }

  init() {
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
    this.init();
  }

  chooseNextMonth() {
    this.month = new Date(this.month.getFullYear(), this.month.getMonth() + 1);
    this.init();
  }
}

class Calendar {
  constructor(month, holidayCalculator) {
    this.initMonth(month);
    this.setHolidayCalculator(holidayCalculator);
  }

  setHolidayCalculator(holidayCalculator) {
    this.holidayCalculator = holidayCalculator;
    this.holidayCalculator.setYear(this.month.getYear());
  }

  choosePrevMonth() {
    this.month.choosePrevMonth();
    this.holidayCalculator.setYear(this.month.getYear());
  }

  chooseNextMonth() {
    this.month.choosePrevMonth();
    this.holidayCalculator.setYear(this.month.getYear());
  }

  initMonth(month) {
    this.date = month;
    this.month = new Month(month);
  }

  setMonth(month) {
    this.initMonth(month);
    this.holidayCalculator.setYear(this.month.getYear());
  }

  dayOfYear(day) {
    const startOfYear = new Date(day.getFullYear(), Months.JANUARY, 1);
    const upToDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    return (
      Math.round(
        (upToDay.getTime() - startOfYear.getTime()) /
          Constants.MILLISECONDS_PER_DAY
      ) + 1
    );
  }

  daysTillEndOfYear(day) {
    return (
      365 - this.dayOfYear(day) + (this.isLeapYear(day.getFullYear()) ? 1 : 0)
    );
  }

  isToday(day) {
    const today = new Date();
    return (
      day.date.getFullYear() === today.getFullYear() &&
      day.date.getMonth() === today.getMonth() &&
      day.date.getDate() === today.getDate()
    );
  }

  isHoliday(day) {
    if (!this.holidayCalculator) return false;
    return this.holidayCalculator.isHoliday(day);
  }

  getHolidayName(day) {
    if (!this.holidayCalculator) return "";
    const holiday = this.holidayCalculator.getHoliday(day);
    return holiday ? holiday : "";
  }

  isLeapYear() {
    if (this.month.getYear() % 4 != 0) return false;
    if (this.month.getYear() % 100 == 0) {
      return this.month.getYear() % 400 == 0;
    }
    return true;
  }
}

function buildCalendar() {}

function init() {
  const today = new Date();
  const holidayCalculator = new GermanHolidayCalculator(
    today.getFullYear(),
    germany.StateIds.HESSEN
  );
  const calendar = new Calendar(new Date(), holidayCalculator);
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
    " (der " + (calendar.dayOfYear(today) + 1) + ". Tag in Schaltjahren)";

  const replacements = [
    { query: '[date="header"]', val: numericDate },
    { query: '[date="day-month"]', val: dayMonthStr },
    { query: '[count="days-since"]', val: calendar.dayOfYear(today) },
    { query: '[count="days-remain"]', val: calendar.daysTillEndOfYear(today) },
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
    germany,
    Months,
    Constants,
  };
} else {
  window.onload = function () {
    init();
  };
}
