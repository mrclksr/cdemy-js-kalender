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

class GermanHolidayCalculator {
    constructor(year, stateId) {
        this.germany = createGermanyObject();
        if (year === undefined || !year) {
            let date = new Date();
            year = date.getFullYear();
        }
        if (!stateId) stateId = this.germany.StateIds.BAVARIA;
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

    getStateList() {
        return this.germany.States;
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
    }

    #addHolidays() {
        this.#addGeneralHolidays();
        this.#addStateHolidays();
        this.holidays.sort((a, b) => a.date - b.date);
    }

    #addGeneralHolidays() {
        for (const holiday of this.germany.GeneralHolidays) this.#addHoliday(holiday);
    }

    #addStateHolidays() {
        this.germany.StateHolidays.forEach((entry) => {
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
        if (holiday.name == this.germany.HolidayNames.REPENTANCE_AND_PRAYER_DAY)
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

class Calendar {
    constructor(month, holidayCalculator) {
        this.#initMonth(month);
        this.#bindMonthMethods();
        this.setHolidayCalculator(holidayCalculator);
    }

    choosePrevMonth() {
        this.month.choosePrevMonth();
        if (!this.holidayCalculator) return;
        this.holidayCalculator.setYear(this.month.getYear());
    }

    chooseNextMonth() {
        this.month.chooseNextMonth();
        if (!this.holidayCalculator) return;
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
        if (!this.holidayCalculator) return;
        this.holidayCalculator.setYear(this.month.getYear());
    }

    setMonth(month) {
        this.#initMonth(month);
        if (!this.holidayCalculator) return;
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

class CalendarPage {
    constructor(calendar) {
        this.calendar = calendar;
        this.cells = [];
        this.header = "";
    }

    build() {
        this.cells = [];
        this.#setHeader();
        this.#addLeadingWeekDays();
        this.#addDaysOfMonth();
        this.#addTrailingWeekDays();
        this.#addPaddingCells();
    }

    getCellData() {
        return this.cells;
    }

    getHeader() {
        return this.header;
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

    #addPaddingCells() {
        if (!this.cells || this.cells.length <= 0 || this.cells.length >= 42) return;
        let lastDay = this.cells[this.cells.length - 1].day;
        if (lastDay >= this.calendar.getNextMonthDays())
            lastDay = 0;
        for (let i = 0; i < 7; i++)
            this.#addOverlappingCell(++lastDay);
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
            holiday: this.calendar.getHolidayName(date),
        };
    }

    #setHeader() {
        this.header = this.calendar.getDateObject().toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric",
        });
    }
}

class HTMLCalendar {
    constructor(calendarPage, tableID) {
        this.calendarPage = calendarPage;
        this.tableID = tableID;
    }

    build() {
        let weekDay = 0;
        let row;
        this.calendarPage.build();
        this.#setHeader();
        const body = this.#getTableBody();
        const data = this.calendarPage.getCellData();
        body.innerHTML = "";
        for (let c of data) {
            if (weekDay++ % 7 == 0) row = this.#addRow(body);
            this.#addCell(row, c);
        }
    }

    #addRow(parent) {
        const tr = document.createElement("tr");
        parent.appendChild(tr);
        return tr;
    }

    #addCell(parent, cellData) {
        const td = document.createElement("td");
        const tt = document.createElement("div");
        parent.appendChild(td);
        td.innerHTML = cellData.day;
        if (cellData.overlapping) td.classList.add("other_month");
        else {
            if (cellData.isToday) td.id = "today";
            if (cellData.isHoliday) {
                td.classList.add("holiday");
                td.classList.add("tooltip");
                tt.classList.add("tooltip-text");
                tt.innerHTML = cellData.holiday;
                td.appendChild(tt);
            }
        }
    }

    #setHeader() {
        for (const e of document.querySelectorAll(
            '[date="calendar_head_month_year"]'
        ))
            e.innerHTML = this.calendarPage.getHeader();
    }

    #getTableBody() {
        let root = document.getElementById(this.tableID);
        if (!root) {
            alert(`Fatal: Calendar with ID ${this.tableID} not found`);
            return null;
        }
        let tbody = root.getElementsByTagName("tbody");
        if (!tbody) {
            alert("Fatal: <tbody> not found in calendar");
            return null;
        }
        return tbody[0];
    }
}

class Page {
    constructor() {
        this.todayDate = new Date();
        /*
         * FIXME: Hacky solution for now. Country should be selectable from
         * a menu.
         */
        this.holidayCalculator = new GermanHolidayCalculator(
            this.todayDate.getFullYear());
        this.calendar = new Calendar(this.todayDate, this.holidayCalculator);
        this.calendarPage = new CalendarPage(this.calendar);
        this.htmlCalendar = new HTMLCalendar(this.calendarPage, "calendar");
        this.onclickNext = this.onclickNext.bind(this);
        this.onclickPrev = this.onclickPrev.bind(this);
        document
            .getElementById("prev_month_bt")
            .addEventListener("click", (event) => this.onclickPrev(event));
        document
            .getElementById("next_month_bt")
            .addEventListener("click", (event) => this.onclickNext(event));
        this.#createStateList();
    }

    show() {
        this.htmlCalendar.build();
        this.#updateTexts();
    }

    onclickNext(e) {
        this.calendar.chooseNextMonth();
        this.htmlCalendar.build();
        this.#updateTexts();
    }

    onclickPrev(e) {
        this.calendar.choosePrevMonth();
        this.htmlCalendar.build();
        this.#updateTexts();
    }

    #createStateList() {
        let selectElement = document.getElementById("states");
        for (let i of this.holidayCalculator.getStateList()) {
            const opt = document.createElement("option");
            opt.textContent = i.name;
            opt.value = i.name;
            selectElement.appendChild(opt);
        }
        selectElement.addEventListener("change", (event) =>
            this.#changeState(event)
        );
        selectElement.selectedIndex = this.holidayCalculator.getStateId();
    }

    #changeState(event) {
        const rec = this.holidayCalculator.getStateList().find((r) => r.name == event.target.value);
        if (rec === undefined) return;
        this.holidayCalculator.setStateId(rec.id);
        this.htmlCalendar.build();
    }

    #setTitle(text) {
        const title = document.getElementById("title");
        if (!title) return;
        title.innerHTML = text;
    }

    #updateTexts() {
        /*
         * FIXME: Same piece of garbage. See above.
         */
        const thisYearHolidayCalculator = new GermanHolidayCalculator(
            this.todayDate.getFullYear(),
            this.holidayCalculator.getStateId()
        );
        const weekDay = this.todayDate.toLocaleDateString("de-DE", {
            weekday: "long",
        });
        const nthDayOfWeek = ((this.todayDate.getDay() + 6) % 7) + 1;
        const numericDate = this.todayDate.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        const dayMonthStr = this.todayDate.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
        });
        const leapYearStr = ` (der ${this.calendar.getDaysSinceStartOfYear(this.todayDate) + 1
            }. Tag in Schaltjahren)`;

        const nextHoliday = thisYearHolidayCalculator.getNextHoliday();
        const nextHolidayText = `Der nächste Feiertag ist <em>${nextHoliday.holiday
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
        this.#setTitle(`Kalenderblatt vom ${numericDate}`);
    }
}

function init() {
    const page = new Page();
    page.show();
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        GermanHolidayCalculator,
        Month,
        Calendar,
        Months,
    };
} else {
    window.onload = function () {
        init();
    };
}
