// Code your solution in this file!
let arr=['Antonia','Nuru','Amari','Mo'];
const returnFirstTwoDrivers=()=>arr.slice(0,2);

returnFirstTwoDrivers();

const returnLastTwoDrivers=()=>arr.slice(2,5);

returnLastTwoDrivers();

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
return function multi(fare){
let z= fare*x;
return z;
}
}

const fareDoubler=(createFareMultiplier)=>createFareMultiplier*2;

const fareTripler=(createFareMultiplier)=>createFareMultiplier*3;

function selectDifferentDrivers(arr,x){
return x();
}

//selectDifferentDrivers(returnFirstTwoDrivers);
//selectDifferentDrivers(returnLastTwoDrivers);

