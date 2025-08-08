class Page {
  constructor() {
    this.todayDate = new Date();
    this.holidayCalculator = new GermanHolidayCalculator(
      this.todayDate.getFullYear(),
      Germany.StateIds.HESSE
    );
    this.calendar = new Calendar(this.todayDate, this.holidayCalculator);
    this.calendarPage = new CalendarPage(this.calendar);
    this.htmlWriter = new HTMLWriter(this.calendarPage, "calendar");
    this.onclickNext = this.onclickNext.bind(this);
    this.onclickPrev = this.onclickPrev.bind(this);
    console.log("Next: ", this.holidayCalculator.getNextHoliday());
    document
      .getElementById("prev_month_bt")
      .addEventListener("click", (event) => this.onclickPrev(event));
    document
      .getElementById("next_month_bt")
      .addEventListener("click", (event) => this.onclickNext(event));
    this.createStateList();
  }

  createStateList() {
    let selectElement = document.getElementById("states");
    for (let i of Germany.States) {
      const opt = document.createElement("option");
      opt.textContent = i.name;
      opt.value = i.name;
      selectElement.appendChild(opt);
    }
    selectElement.addEventListener("change", (event) =>
      this.changeState(event)
    );
    selectElement.selectedIndex = this.holidayCalculator.getStateId();
  }

  changeState(event) {
    const rec = Germany.States.find((r) => r.name == event.target.value);
    if (rec === undefined) return;
    this.holidayCalculator.setStateId(rec.id);
    this.htmlWriter.build();
  }

  show() {
    this.htmlWriter.build();
    this.updateTexts();
  }

  onclickNext(e) {
    this.calendar.chooseNextMonth();
    this.htmlWriter.build();
    this.updateTexts();
  }

  onclickPrev(e) {
    this.calendar.choosePrevMonth();
    this.htmlWriter.build();
    this.updateTexts();
  }

  updateTexts() {
    const weekDay = this.todayDate.toLocaleDateString("de-DE", {
      weekday: "long",
    });
    const nthDayOfWeek = ((this.todayDate.getDay() + 6) % 7) + 1;
    const numericDate = this.todayDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const monthYearStr = this.calendar
      .getDateObject()
      .toLocaleDateString("de-DE", {
        month: "long",
        year: "numeric",
      });
    const dayMonthStr = this.todayDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
    });
    const leapYearStr = ` (der ${
      this.calendar.getDaysSinceStartOfYear(this.todayDate) + 1
    }. Tag in Schaltjahren)`;

    const nextHoliday = this.holidayCalculator.getNextHoliday();
    const nextHolidayText = `Der nächste Feiertag ist <em>${
      nextHoliday.holiday
    }</em>, am ${nextHoliday.date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })}`;

    const replacements = [
      { query: '[date="numeric-date"]', val: numericDate },
      { query: '[date="day-month"]', val: dayMonthStr },
      {
        query: '[count="days-since"]',
        val: this.calendar.getDaysSinceStartOfYear(this.todayDate),
      },
      {
        query: '[count="days-remain"]',
        val: this.calendar.getDaysTillEndOfYear(this.todayDate),
      },
      { query: '[date="day-of-week"]', val: weekDay },
      { query: '[date="nth-day-of-week"]', val: nthDayOfWeek },
      { query: '[date="calendar_head_month_year"]', val: monthYearStr },
      {
        query: '[date="is-holiday"]',
        val: this.calendar.isHoliday(this.todayDate) ? "ein" : "kein",
      },
      {
        query: '[date="days-with-leap-text"]',
        val: !this.calendar.isLeapYear(this.todayDate) ? leapYearStr : "",
      },
      {
        query: '[date="next-holiday"]',
        val: nextHolidayText,
      },
    ];
    for (let r of replacements) {
      for (const e of document.querySelectorAll(r.query)) {
        e.innerHTML = r.val;
      }
    }
  }
}