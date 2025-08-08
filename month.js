class Month {
  constructor(month) {
    if (!month || month === undefined) month = new Date();
    this.month = month;
    this.#init();
  }

  getYear() {
    return this.month.getFullYear();
  }

  getMonth() {
    return this.month.getMonth();
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
    this.#addDays();
  }

  #addDays() {
    for (let i = 0; i < this.daysInMonth; i++)
      this.days.push(
        new Date(this.month.getFullYear(), this.month.getMonth(), i + 1)
      );
  }
}
