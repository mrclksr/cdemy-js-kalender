function init() {
  const page = new Page();
  page.show();
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