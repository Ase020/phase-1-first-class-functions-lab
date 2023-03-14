const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(drivers) {
   let newArray = [];
   for (let item of drivers) {
      newArray.push(item);
   }
   newArray.splice(2, 4);
   return newArray;
}

function returnLastTwoDrivers(drivers) {
   let newArray = [];
   for (let item of drivers) {
      newArray.push(item);
   }
   newArray.splice(0, 2);
   return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
   return () => fare * fare;
}

function fareDoubler(fare) {
   return fare * 2;
}

function fareTripler(fare) {
   return fare * 3;
}

function selectDifferentDrivers(driverArray, returnFirstTwo) {
   return returnFirstTwo(driverArray);
}
// console.log(fareTripler(10));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
