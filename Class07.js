"use strict";
// Leaves opening hours accessible

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
//attaches table information to the "sales-table" ID on the sales.HTML file
const tableElement = document.getElementById("sales-table");

//an empty array, to be populated with the names of each individual Franchise
const state = {
  allFranchises: [],
};

//constructor function
function Franchise(
  locationName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiePerSale
) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
}

//Prototype that populates the empty "this.customerEachHour" array in the Franchise constructor function
// Uses a for loop using the opening hours as a reference point to push a random number (between the
// relevant min/max customers per hour) into the array

Franchise.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      random(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

//Calculates cookies each hour (rounded up with Math.ceil) - for loop counted by "hours" -
// customers each hour [i] x average cookies per sale
Franchise.prototype.calcCookiesEachhour = function () {
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(
      this.customersEachHour[i] * this.avgCookiePerSale
    );
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

Franchise.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachhour();
  const tableRow = document.createElement("tr");
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement("td");
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeader = document.createElement("th");
  tableHeader.textContent = this.totalDailySales;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
};

let franchise1 = new Franchise("Seattle", 23, 65, 6.3);
let franchise2 = new Franchise("Tokyo", 3, 24, 1.2);
let franchise3 = new Franchise("Dubai", 11, 38, 3.7);
let franchise4 = new Franchise("Paris", 20, 38, 2.3);
let franchise5 = new Franchise("Lima", 2, 16, 4.6);

state.allFranchises.push(
  franchise1,
  franchise2,
  franchise3,
  franchise4,
  franchise5
);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeHeaderRow() {
  const tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Locations";
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement("th");
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = "Location Totals";
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFooterRow() {
  const tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Hourly Totals for All Locations";
  tableRow.appendChild(tableHeader);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < state.allFranchises.length; j++) {
      hourlyTotal += state.allFranchises[j].cookiesEachHour[i];
      totalOfTotals += state.allFranchises[j].cookiesEachHour[i];
    }
    tableHeader = document.createElement("th");
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function renderTable() {
  makeHeaderRow();
  for (let i = 0; i < state.allFranchises.length; i++) {
    state.allFranchises[i].render();
  }
  makeFooterRow();
}

renderTable();
