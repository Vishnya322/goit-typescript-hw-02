/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
// Monday = "work",
// Tuesday = "work",
// Wednesday = "work",
// Thursday = "work",
// Friday = "work",
// Saturday = "weekend",
// Sunday = "weekend",
function isWeekend(day) {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}
console.log(isWeekend(WeekDay.Monday));
console.log(isWeekend(WeekDay.Saturday));
//# sourceMappingURL=7.js.map