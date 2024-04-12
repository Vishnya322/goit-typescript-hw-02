/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
// Monday = "work",
// Tuesday = "work",
// Wednesday = "work",
// Thursday = "work",
// Friday = "work",
// Saturday = "weekend",
// Sunday = "weekend",

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}
console.log(isWeekend(WeekDay.Monday));
console.log(isWeekend(WeekDay.Saturday));
