// import data.js
const {arrayNumbers,arrayCars} = require('./data')

//function for sort arrayNumbers
function sortArrayNumbers() {
const sortNum = arrayNumbers.sort((a,b)=> a-b);
console.log(sortNum)
}

// function for sort String // sort arrayCars
function sortStringArrayCars() {
    const sortString = arrayCars.sort();
    console.log(sortString)
}

module.exports ={
    sortArrayNumbers,
    sortStringArrayCars
}