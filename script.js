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
  REPETANCE_AND_PRAYER_DAY: "Day of Repentance and Prayer",
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
    easterOffset: 49,
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
        name: germany.HolidayNames.REPETANCE_AND_PRAYER_DAY,
      },
    ],
  },
]);

class GermanHolidayCalculator {
  constructor(year, stateId) {
    if (!year) {
      date = new Date();
      year = date.getFullYear();
    }
    this.stateId = stateId || germany.StateIds.BAVARIA;
    this.year = year;
    init();
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
    this.easterSunday = this.calculateEasterSunday(year);
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
    return this.holidays.some((holiday) => this.compareDays(holiday, day));
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
    if (holiday.name == germany.HolidayNames.REPETANCE_AND_PRAYER_DAY)
      return this.calculateRepetanceAndPrayerDay();
    return new Date(this.year, holiday.month, holiday.day);
  }

  calculateRepetanceAndPrayerDay() {
    // The Day of Repetance and Prayer is the first Wendnessday between Nov. 16 and Nov. 22
    let offset = 0;
    const wendnessday = 2;
    const startDate = new Date(this.year, Months.NOVEMBER, 16);
    // Make Monday day 0, Tuesday  1, etc.
    const startDateShifted = (startDate.getDay() + 6) % 7;
    if (startDateShifted < wendnessday) offset = wendnessday - startDateShifted;
    else offset = 7 - (startDateShifted - wendnessday);
    const date = new Date(this.year, Months.NOVEMBER, 16 + offset);
    console.log(date);
    return date;
  }

  compareDays(day1, day2) {
    return (
      day1.getDate() === day2.getDate() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getFullYear() === day2.getFullYear()
    );
  }

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
    this.initMonth();
  }

  initMonth() {
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

  choosePrevMonth() {
    this.month = new Date(this.month.getFullYear(), this.month.getMonth() - 1);
    this.initMonth();
  }

  chooseNextMonth() {
    this.month = new Date(this.month.getFullYear(), this.month.getMonth() + 1);
    this.initMonth();
  }
}

class Calendar {
  constructor(month, holidayCalculator) {
    this.holidayCalculator = holidayCalculator;
    this.setMonth(month);
  }

  setHolidayCalculator(holidayCalculator) {
    this.holidayCalculator = holidayCalculator;
    this.holidayCalculator();
  }

  setMonth(month) {
    this.date = month;
    this.month = new Month(month);
    this.holidayCalculator.setYear(month.getYear());
  }

  dayOfYear(day) {
    const startOfYear = new Date(day.getFullYear(), Constants.JANUARY, 1);
    return Math.floor((day - startOfYear) / Constants.MILLISECONDS_PER_DAY) + 1;
  }

  daysTillEndOfYear(day) {
    const endOfYear = new Date(day.getFullYear(), Constants.DECEMBER, 31);
    return Math.floor((endOfYear - this.date) / Constants.MILLISECONDS_PER_DAY);
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
    return holiday ? holiday.name : "";
  }
}

function init() {
  const monthDate = new Date(2025, Months.JANUARY);
  const month = new Month(monthDate);
  console.log(month.month);
  month.choosePrevMonth();
  console.log(month.month);
  console.log(month.firstWeekday);
  console.log(month.daysInMonth);

  const today = new Date();
  const date = new Date(2027, Months.NOVEMBER, 1);
  holidayCalculator = new GermanHolidayCalculator(
    2027,
    germany.StateIds.SAXONY
  );
  holidayCalculator.calculateRepetanceAndPrayerDay();
  alert(holidayCalculator.getHoliday(date));
  const foo = new Date(2025, 0);
  const bar = new Date(2025, foo.getMonth() - 1);
  console.log(bar);
  console.log(
    date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );
  //    setPageHeadingDate(date);
  //    createCalendar(today);
}

function setPageHeadingDate(date) {
  const selDate = document.getElementById("sel_date");
  selDate.innerHTML = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getLeadingWeekDays(date) {
  const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 0);
  return lastDayPrevMonth.getDay();
}

function getTrailingWeekDays(date) {
  const firstDayNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  );
  return (8 - firstDayNextMonth.getDay()) % 7;
}

// Define a CalendarBuilder class to encapsulate data and methods of the calendar builder
function CalendarBuilder(date) {
  this.date = date;
  this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  this.daysInMonth = this.lastDay.getDate();
  this.firstWeekday = this.firstDay.getDay();
  this.today = new Date();

  this.createRow = createRow;
}

function createRow(rowNumber) {
  if (7 * rowNumber > this.daysInMonth + 6) return null;
  row = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    const day = 7 * rowNumber + i;
    const cell = row.createElement("td");
    cell.innerText = day + 1;
    this.setCellAttributes(cell, day);
    row.appendChild(cell);
  }
  return row;
}

function setCellAttributes(cell, day) {
  this.setDayClass(cell, day);
  const holiday = this.getHoliday(day);
  if (holiday) cell.setAttribute("holiday", holiday);
  if (self.isToday(day)) cell.setAttribute("id", "today");
}

function isToday(day) {
  return (
    this.today.getDate() === day &&
    this.today.getMonth() === this.date.getMonth() &&
    this.today.getFullYear() === this.date.getFullYear()
  );
}

function getHoliday(day) {
  return null;
}

function setDayClass(cell, day) {
  cell.className = "";
  if (day < (this.firstWeekday + 6) % 7)
    cell.className = this.prevMonthDayClass;
  if (day >= this.daysInMonth) cell.className = this.nextMonthDayClass;
}

window.onload = function () {
  init();
};
