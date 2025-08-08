class HTMLWriter {
  constructor(calendarPage, tableID) {
    this.calculatePage = calendarPage;
    this.tableID = tableID;
  }

  build() {
    let weekDay = 0;
    let row;

    this.calculatePage.build();
    const body = this.#getTableBody();
    const data = this.calculatePage.getCellData();
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
    parent.appendChild(td);
    td.innerHTML = cellData.day;
    if (cellData.overlapping) td.classList.add("other_month");
    else {
      if (cellData.isToday) td.id = "today";
      if (cellData.isHoliday) td.classList.add("holiday");
    }
    td.classList.add();
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
