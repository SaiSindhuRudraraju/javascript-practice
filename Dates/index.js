/**
 *  Date objects = Objects that contain values that represent dates and times.
 *                 These date objects can be changed and formatted
 */

const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date1);
//OutPut: Mon Jan 01 2024 02:03:04 GMT-0600 (Central Standard Time)

const date2 = new Date("2024-01-02T12:00:00z");
console.log(date2);


const date4 = new Date(0);
console.log(date4);
// O/P: Wed Dec 31 1969 18:00:00 GMT-0600 (Central Standard Time)

const date3 = new Date(1700000000000000);
console.log(date3);
// 1700000000000000 seconds after Wed Dec 31 1969 18:00:00 GMT-0600


const date = new Date();
console.log(date);
// current date

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date);

const dateA = new Date("2023-12-31");
const dateB = new Date("2024-01-01");

if(dateB > dateA)
{
    console.log("Happy NEW YEAR!!");
}
