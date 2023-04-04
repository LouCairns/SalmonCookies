" use strict";

// Each store open 14 hours per day (6am-7pm inc)

// Store the min/max hourly customers, and average cookies per customer, in object properties

// Use a method of that object to generate a random number of customers per hour

// Calculate and store the simulated amounts of cookies purchased for each hour at each
// location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array...perhaps as a property of the
// object representing that location

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

const Franchise1 = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("seattle");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

Franchise1.render();

const Franchise2 = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("tokyo");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

Franchise2.render();

const Franchise3 = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("dubai");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

Franchise3.render();

const Franchise4 = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("paris");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

Franchise4.render();

const Franchise5 = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("lima");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

Franchise5.render();

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const allShops = [seattle, tokyo, dubai, paris, lima];

// function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render;
//   }
// }

// renderAllShops();
