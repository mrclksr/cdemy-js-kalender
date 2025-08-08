class CalendarPage {
  constructor(calendar) {
    this.calendar = calendar;
    this.cells = [];
  }

  build() {
    this.cells = [];
    this.#addLeadingWeekDays();
    this.#addDaysOfMonth();
    this.#addTrailingWeekDays();
  }

  getCellData() {
    return this.cells;
  }

  #addLeadingWeekDays() {
    for (
      let i = this.calendar.getLeadingWeekDaysFromPrevMonth() - 1;
      i >= 0;
      i--
    ) {
      let prevMonthDay = this.calendar.getPrevMonthDays() - i;
      this.#addOverlappingCell(prevMonthDay);
    }
  }

  #addTrailingWeekDays() {
    for (let i = 0; i < this.calendar.getTrailingWeekDaysFromNextMonth(); i++) {
      let nextMonthDay = i + 1;
      this.#addOverlappingCell(nextMonthDay);
    }
  }

  #addDaysOfMonth() {
    for (let i = 0; i < this.calendar.getDaysInMonth(); i++) {
      this.#addCell(i + 1);
    }
  }

  #addOverlappingCell(day) {
    let cell = this.#createCell(day);
    cell.overlapping = true;
    this.cells.push(cell);
  }

  #addCell(day) {
    this.cells.push(this.#createCell(day));
  }

  #createCell(day) {
    const date = new Date(
      this.calendar.getYear(),
      this.calendar.getMonth(),
      day
    );
    return {
      day: day,
      overlapping: false,
      isToday: this.calendar.isToday(date),
      isHoliday: this.calendar.isHoliday(date),
    };
  }
}
