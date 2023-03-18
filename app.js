'use strict'
//Seattle sales
let seattleCs = {
    location: "seattle",
    minimum: 23,
    maximum: 65,
    avrgSold: 6.3,

    //Return random logic
    calcCustomer: function () {
        return (this.maximum - this.minimum) * Math.random() + this.minimum;
    }
}
//Display
const array = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var sales = [];
let unorderedList = document.getElementById("tr");
let arr = []; //this is an open array to check a conole.log
for (let time = 0; time < array.length; time++) {

    let cookiesSold = Math.ceil(seattleCs.avrgSold * seattleCs.calcCustomer())
    sales.push(`Time: ${array[time]}, Cookies Sold: ${cookiesSold}`)
    let listitem = document.createElement("td");
    listitem.appendChild(document.createTextNode(`${cookiesSold}`))
    unorderedList.appendChild(listitem)
    console.log(cookiesSold)
    arr.push(cookiesSold);
}
console.log(arr)
let sum = arr.reduce(function (a, b) {
    return a + b;
});
console.log("sum", sum);
let listSum = document.getElementById("td");

//Tokyo sales
let tokyoCs = {
    location: "tokyo",
    minimum: 3,
    maximum: 24,
    avrgSold: 1.2,

    //Return random logic
    calcCustomer: function () {
        return (this.maximum - this.minimum) * Math.random() + this.minimum;
    }
}
//Display
let unorderedList2 = document.getElementById("tr2");
for (let time = 0; time < array.length; time++) {

    let cookiesSold = Math.ceil(seattleCs.avrgSold * seattleCs.calcCustomer())
    sales.push(`Time: ${array[time]}, Cookies Sold: ${cookiesSold}`)
    let listitem = document.createElement("td");
    listitem.appendChild(document.createTextNode(`${cookiesSold}`))
    unorderedList2.appendChild(listitem)
    console.log(cookiesSold)
    arr.push(cookiesSold);
}
console.log(arr)
let sum2 = arr.reduce(function (a, b) {
    return a + b;
});
console.log("sum2", sum2);
let listSum2 = document.getElementById("td2");

//dubai sales
let dubaiCs = {
    location: "dubai",
    minimum: 11,
    maximum: 38,
    avrgSold: 3.7,

    //Return random logic
    calcCustomer: function () {
        return (this.maximum - this.minimum) * Math.random() + this.minimum;
    }
}
//Display
let unorderedList3 = document.getElementById("tr3");
for (let time = 0; time < array.length; time++) {

    let cookiesSold = Math.ceil(seattleCs.avrgSold * seattleCs.calcCustomer())
    sales.push(`Time: ${array[time]}, Cookies Sold: ${cookiesSold}`)
    let listitem = document.createElement("td");
    listitem.appendChild(document.createTextNode(`${cookiesSold}`))
    unorderedList3.appendChild(listitem)
    console.log(cookiesSold)
    arr.push(cookiesSold);
}
console.log(arr)
let sum3 = arr.reduce(function (a, b) {
    return a + b;
});
console.log("sum3", sum3);
let listSum3 = document.getElementById("td3");

//paris sales
let parisCs = {
    location: "paris",
    minimum: 20,
    maximum: 38,
    avrgSold: 2.3,

    //Return random logic
    calcCustomer: function () {
        return (this.maximum - this.minimum) * Math.random() + this.minimum;
    }
}
//Display
let unorderedList4 = document.getElementById("tr4");
for (let time = 0; time < array.length; time++) {

    let cookiesSold = Math.ceil(seattleCs.avrgSold * seattleCs.calcCustomer())
    sales.push(`Time: ${array[time]}, Cookies Sold: ${cookiesSold}`)
    let listitem = document.createElement("td");
    listitem.appendChild(document.createTextNode(`${cookiesSold}`))
    unorderedList4.appendChild(listitem)
    console.log(cookiesSold)
    arr.push(cookiesSold);
}
console.log(arr)
let sum4 = arr.reduce(function (a, b) {
    return a + b;
});
console.log("sum4", sum4);
let listSum4 = document.getElementById("td4");

//lima sales
let limaCs = {
    location: "lima",
    minimum: 2,
    maximum: 16,
    avrgSold: 4.6,

    //Return random logic
    calcCustomer: function () {
        return (this.maximum - this.minimum) * Math.random() + this.minimum;
    }
}
//Display
let unorderedList5 = document.getElementById("tr5");
for (let time = 0; time < array.length; time++) {

    let cookiesSold = Math.ceil(seattleCs.avrgSold * seattleCs.calcCustomer())
    sales.push(`Time: ${array[time]}, Cookies Sold: ${cookiesSold}`)
    let listitem = document.createElement("td");
    listitem.appendChild(document.createTextNode(`${cookiesSold}`))
    unorderedList5.appendChild(listitem)
    console.log(cookiesSold)
    arr.push(cookiesSold);
}
console.log(arr)
let sum5 = arr.reduce(function (a, b) {
    return a + b;
});
console.log("sum5", sum5);
let listSum5 = document.getElementById("td5");

// New City //

// Define Store class
class Store {
    constructor(location, minimum, maximum, avrgSold) {
      this.location = location;
      this.minimum = minimum;
      this.maximum = maximum;
      this.avrgSold = avrgSold;
    }
  
    // Returns a random number of cookies sold per hour
    calcCustomer() {
      return Math.ceil((Math.random() * (this.maximum - this.minimum + 1) + this.minimum) * this.avrgSold);
    }
  
    // Renders a new row in the table for this store
    render() {
      let table = document.querySelector('.city-table');
  
      // Create new row element with id
      let newRow = document.createElement('tr');
      newRow.setAttribute('id', `tr${table.rows.length}`);
  
      // Create new location cell element
      let locationCell = document.createElement('td');
      locationCell.textContent = this.location;
      newRow.appendChild(locationCell);
  
      // Calculate and add sales data for each hour
      let sales = [];
      for (let i = 0; i < 14; i++) {
        let cookiesSold = this.calcCustomer();
        sales.push(cookiesSold);
        let listItem = document.createElement('td');
        listItem.textContent = cookiesSold;
        newRow.appendChild(listItem);
      }
  
      // Append the new row to the table
      table.appendChild(newRow);
    }
  }
  
  // Generate footer row for the table
  function generateFooter() {
    let table = document.querySelector('.city-table');
    let tFoot = table.createTFoot();
    let footerRow = tFoot.insertRow(-1);
  
    let locationCell = document.createElement('td');
    locationCell.textContent = 'Total';
    footerRow.appendChild(locationCell);
  
    let totalSales = [];
    let numColumns = table.rows[0].cells.length - 1; // exclude the location cell
    for (let i = 0; i < numColumns; i++) {
      totalSales.push(0);
    }
  
    for (let i = 1; i < table.rows.length - 1; i++) { // exclude header and footer rows
      let row = table.rows[i];
      for (let j = 1; j < row.cells.length; j++) { // exclude location cell
        let cellValue = parseInt(row.cells[j].textContent);
        totalSales[j - 1] += cellValue;
      }
    }
  
    for (let i = 0; i < numColumns; i++) {
      let cell = document.createElement('td');
      cell.textContent = totalSales[i];
      footerRow.appendChild(cell);
    }
  }
  
  // Call the function to generate the footer initially
  generateFooter();
  
  // Add event listener for form submission
  let form = document.querySelector('#cookieStandForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form behavior
  
    // Get the user inputted location name
    let location = event.target.location.value;
  
    // Create a new Store object with location data
    let newStore = new Store(location, 2, 16, 4.6);
  
    // Render a new row in the table for the new store
    newStore.render();
  
    // Reset the form input
    event.target.reset();
  
    let table = document.querySelector('.city-table');
    table.deleteTFoot();
  
    // Update the footer after adding a new store
    generateFooter();
  });
  