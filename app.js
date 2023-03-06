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
