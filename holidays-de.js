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
    { month: Months.AUGUST, day: 6, name: "Andres Geburtstag" },
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
      let date = new Date();
      year = date.getFullYear();
    }
    if (!stateId) stateId = Germany.StateIds.BAVARIA;
    this.stateId = stateId;
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

  getHoliday(day) {
    let rec = this.holidays.find((holiday) =>
      this.#compareDays(holiday.date, day)
    );
    return rec ? rec.holiday : "";
  }

  getStateId() {
    return this.stateId;
  }

  getNextHoliday() {
    const today = new Date();

    for (let h of this.holidays) {
      if (h.date - today >= 0) return h;
    }
    // Next year
    const nextYearHC = new GermanHolidayCalculator(this.year + 1);
    return nextYearHC.holidays[0];
  }

  isHoliday(day) {
    return this.holidays.some((holiday) =>
      this.#compareDays(holiday.date, day)
    );
  }

  #init() {
    this.easterSunday = this.#calculateEasterSunday(this.year);
    this.holidays = [];
    this.#addHolidays();
    console.log(this.holidays);
  }

  #addHolidays() {
    this.#addGeneralHolidays();
    this.#addStateHolidays();
    this.holidays.sort((a, b) => a.date - b.date);
  }

  #addGeneralHolidays() {
    for (const holiday of Germany.GeneralHolidays) this.#addHoliday(holiday);
  }

  #addStateHolidays() {
    Germany.StateHolidays.forEach((entry) => {
      if (entry.states.includes(this.stateId)) {
        for (const holiday of entry.holidays) this.#addHoliday(holiday);
      }
    });
  }

  #addHoliday(holiday) {
    const date = this.#calculateDate(holiday);
    const rec = { date: date, holiday: holiday.name };
    this.holidays.push(rec);
  }

  #calculateDate(holiday) {
    if (holiday.easterOffset !== undefined)
      return new Date(
        this.year,
        this.easterSunday.getMonth(),
        this.easterSunday.getDate() + holiday.easterOffset
      );
    if (holiday.name == Germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY)
      return this.#calculateRepentanceAndPrayerDay();
    return new Date(this.year, holiday.month, holiday.day);
  }

  #compareDays(day1, day2) {
    return (
      day1.getDate() === day2.getDate() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getFullYear() === day2.getFullYear()
    );
  }

  #calculateRepentanceAndPrayerDay() {
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
  #calculateEasterSunday(year) {
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