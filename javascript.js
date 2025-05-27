/*
 javascript.js,
 rob's rental code
 may 19th 2025
*/
console.log("Running javascript.js");

//Variables
function getUserName() {
    userName = prompt("please input name:");
}
function getUserSeatN() {
    userAge = prompt("Hi "+userName+" please input amount of seats you need in your rental vehicle (max of 8):");
}
function getUserTime() {
    userMoney = prompt("Hi "+userName+ " Please input amount of days you wish to rent the vehicle (max of 30):");
}
/*
Main code
*/


const MIN_USER_SEAT_N = 1;
const MAX_USER_SEAT_N = 8;
const MIN_USER_TIME = 1;
const MAX_USER_TIME = 30;
function start() {
    getUserName();
    if (!isNaN(userName)|| userName == null || userName == "" || userName == " "){
        alert("Name must be a valid name");
    } 
    getUserSeatN();
    if (isNaN(userSeatN)|| userSeatN == null || userSeatN == "" || userSeatN == " " || userSeatN < MIN_USER_SEAT_N || userSeatN > MAX_USER_SEAT_N){
        alert("amount of seats must be a valid amount of seats");
    }
    getUserTime();
    if (isNaN(userTime)|| userTime == null || userTime == "" || userTime == " " || userTime < MIN_USER_TIME || userTime > MAX_USER_TIME){
        alert("Amount of days must be a valid amount of days");

    }
}
/*
Functions
*/