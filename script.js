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
    DECEMBER: 11
};

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
    THURINGIA: 15
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
    { id: StateIds.MECKLENBURG_WESTERN_POMERANIA, name: "Mecklenburg-Western Pomerania" },
    { id: StateIds.NORTH_RHINE_WESTPHALIA, name: "North Rhine-Westphalia" },
    { id: StateIds.RHINELAND_PALATINATE, name: "Rhineland-Palatinate" },
    { id: StateIds.SAARLAND, name: "Saarland" },
    { id: StateIds.SAXONY, name: "Saxony" },
    { id: StateIds.SAXONY_ANHALT, name: "Saxony-Anhalt" },
    { id: StateIds.SCHLESWIG_HOLSTEIN, name: "Schleswig-Holstein" },
    { id: StateIds.THURINGIA, name: "Thuringia" }
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
    WOMENS_DAY: "Women's Day"
};

const GeneralHolidays = [
    { month: Months.JANUARY, day: 1, name: HolidayNames.NEW_YEAR },
    { month: Months.APRIL, easterOffset: 0, name: HolidayNames.EASTER_SUNDAY },
    { month: Months.APRIL, easterOffset: 1, name: HolidayNames.EASTER_MONDAY },
    { month: Months.APRIL, easterOffset: -2, name: HolidayNames.GOOD_FRIDAY },
    { month: Months.MAY, day: 1, name: HolidayNames.LABOR_DAY },
    { month: Months.MAY, easterOffset: 39, name: HolidayNames.ASCENSION_DAY },
    { month: Months.JUNE, easterOffset: 49, name: HolidayNames.WHIT_MONDAY },
    { month: Months.OCTOBER, day: 3, name: HolidayNames.GERMAN_UNITY_DAY },
    { month: Months.DECEMBER, day: 25, name: HolidayNames.CHRISTMAS_DAY },
    { month: Months.DECEMBER, day: 26, name: HolidayNames.BOXING_DAY }
];

const StateHolidays = [
    {
        stateId: StateIds.BAVARIA, holidays: [
            { month: Months.JANUARY, day: 6, name: HolidayNames.EPIPHANY },
            { month: Months.NOVEMBER, day: 1, name: HolidayNames.ALL_SAINTS_DAY }
        ]
    },
    {
        stateId: StateIds.BADEN_WUERTTEMBERG, holidays: [
            { month: Months.JANUARY, day: 6, name: HolidayNames.EPIPHANY },
            { month: Months.NOVEMBER, day: 1, name: HolidayNames.ALL_SAINTS_DAY }
        ]
    },
    {
        stateId: StateIds.BERLIN, holidays: [
            { month: Months.MARCH, day: 8, name: HolidayNames.WOMENS_DAY },
        ]
    },
    {
        stateId: StateIds.BRANDENBURG, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.BREMEN, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.HAMBURG, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.LOWER_SAXONY, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.MECKLENBURG_WESTERN_POMERANIA, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.NORTH_RHINE_WESTPHALIA, holidays: [
            { month: Months.NOVEMBER, day: 1, name: HolidayNames.ALL_SAINTS_DAY }
        ]
    },
    {
        stateId: StateIds.RHINELAND_PALATINATE, holidays: [
            { month: Months.NOVEMBER, day: 1, name: HolidayNames.ALL_SAINTS_DAY }
        ]
    },
    {
        stateId: StateIds.SAARLAND, holidays: [
            { month: Months.AUGUST, day: 15, name: "Assumption Day" },
            { month: Months.NOVEMBER, day: 1, name: HolidayNames.ALL_SAINTS_DAY }
        ]
    },
    {
        stateId: StateIds.SAXONY, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY },
            { month: Months.NOVEMBER, day: 21, name: "Day of Repentance and Prayer" }
        ]
    },
    {
        stateId: StateIds.SAXONY_ANHALT, holidays: [
            { month: Months.JANUARY, day: 6, name: HolidayNames.EPIPHANY },
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.SCHLESWIG_HOLSTEIN, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    },
    {
        stateId: StateIds.THURINGIA, holidays: [
            { month: Months.OCTOBER, day: 31, name: HolidayNames.REFORMATION_DAY }
        ]
    }
];

class HolidayCalculator {
    constructor(year, stateId) {
        this.stateId = stateId || StateIds.BAVARIA;
        this.year = year;
        this.easterSunday = this.calculateEasterSunday(year);
        this.holidays = [];
        this.calculateHolidays();
    }

    getHoliday(day) {
        return this.holidays.find(holiday =>
            holiday.getDate() === day.getDate() &&
            holiday.getMonth() === day.getMonth() &&
            holiday.getFullYear() === day.getFullYear()
        );
    }

    isHoliday(day) {
        return this.holidays.some(holiday =>
            holiday.getDate() === day.getDate() &&
            holiday.getMonth() === day.getMonth() &&
            holiday.getFullYear() === day.getFullYear()
        );
    }

    calculateHolidays() {
        for (const holiday of GeneralHolidays) {
            let date;
            if (holiday.easterOffset !== undefined)
                date = new Date(this.year, holiday.month, this.easterSunday.getDate() + holiday.easterOffset);
            else
                date = new Date(this.year, holiday.month, holiday.day);
            this.holidays.push(date);
        }
        const stateHolidays = StateHolidays.find(state => state.stateId === this.stateId);
        if (stateHolidays) {
            for (const holiday of stateHolidays.holidays)
                this.holidays.push(new Date(this.year, holiday.month, holiday.day));
        }
    }

    calculateEasterSunday(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 16);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 16);
        const j = (32 + 2 * e + 2 * i - h - c) % 7;
        const k = Math.floor((a + 11 * h + 22 * j) / 451);
        const month = Math.floor((h + j - k + 114) / 31);
        const day = ((h + j - k + 114) % 31) + 1;

        return new Date(year, month - 1, day);
    }
}

class Day {
    // Pass a day as Date object to the constructor
    constructor(date) {
        this.date = date;
        this.day = date.getDate();
        this.isHoliday = false;
        this.holidayName = "";
    }

    setHoliday(holidayName) {
        this.isHoliday = true;
        this.holidayName = holidayName;
    }
}

class Month {
    constructor(month) {
        const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
        const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
        this.month = month;
        this.daysInMonth = lastDay.getDate();
        this.firstWeekday = firstDay.getDay();
        this.days = [];
        this.addDays(date);
    }

    addDays(date) {
        for (let i = 0; i < this.daysInMonth; i++)
            this.days.push(new Date(date.getFullYear(), date.getMonth(), i + 1));
    }
}

class Calendar {
    constructor(month, holidayCalculator) {
        this.holidayCalculator = holidayCalculator;
        this.setMonth(month);
    }

    setMonth(month) {
        this.date = month;
        this.month = new Month(month);
        this.holidayCalculator.setYear(month.getFullYear());
    }

    dayOfYear(day) {
        const startOfYear = new Date(day.getFullYear(), Constants.JANUARY, 1);
        return (Math.floor((day - startOfYear) / Constants.MILLISECONDS_PER_DAY) + 1);
    }

    daysTillEndOfYear(day) {
        const endOfYear = new Date(day.getFullYear(), Constants.DECEMBER, 31);
        return (Math.floor((endOfYear - this.date) / Constants.MILLISECONDS_PER_DAY));
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
        return this.holidayCalculator.isHoliday(day);
    }

    getHolidayName(day) {
        const holiday = this.holidayCalculator.getHoliday(day);
        if (holiday) {
            return holiday.name;
        } else {
            return "";
        }
    }
}

function init() {
    const today = new Date();
    setPageHeadingDate(date);
    createCalendar(today);
}

function setPageHeadingDate(date) {
    const selDate = document.getElementById("sel_date");
    selDate.innerHTML = date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

function getLeadingWeekDays(date) {
    const lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    return lastDayPrevMonth.getDay();
}

function getTrailingWeekDays(date) {
    const firstDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
    if (7 * rowNumber > this.daysInMonth + 6)
        return null;
    row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const day = 7 * rowNumber + i;
        const cell = row.createElement('td');
        cell.innerText = day + 1;
        this.setCellAttributes(cell, day);
        row.appendChild(cell);
    }
    return row;
}

function setCellAttributes(cell, day) {
    this.setDayClass(cell, day);
    const holiday = this.getHoliday(day);
    if (holiday)
        cell.setAttribute('holiday', holiday);
    if (self.isToday(day))
        cell.setAttribute('id', 'today');
}

function isToday(day) {
    return this.today.getDate() === day &&
        this.today.getMonth() === this.date.getMonth() &&
        this.today.getFullYear() === this.date.getFullYear();
}

function getHoliday(day) {
    return null;
}

function setDayClass(cell, day) {
    cell.className = "";
    if (day < (this.firstWeekday + 6) % 7)
        cell.className = this.prevMonthDayClass;
    if (day >= this.daysInMonth)
        cell.className = this.nextMonthDayClass;
}

function createCalendarRow(date, firstDay, lastDay, daysInMonth, firstWeekday, lastWeekday, todayDate, todayMonth, todayYear, selectedDateDay) {
    function createCalendar(date) {
        const calendar = document.getElementById("calendar");
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const daysInMonth = lastDay.getDate();
        const firstWeekday = firstDay.getDay();
        const lastWeekday = lastDay.getDay();
        const today = new Date();
        const todayDate = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();
        const selectedDate = new Date(year, month, 14); // Example selected date
        const selectedDateDay = selectedDate.getDate();

    }


    function main() {
        const today = new Date();
        const selDate = document.getElementById("sel_date");
        selDate.innerHTML = today.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }

    function selectDate(date) {
    }


    this.date = month;
    this.month = new Month(month);
    this.holidayCalculator = new HolidayCalculator(month.getFullYear());