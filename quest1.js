const prompt = require("prompt-sync")({ sigint: true });

function libraryBooks(d1, m1, y1, d2, m2, y2) {
  if (y1 === y2 && m1 === m2 && d1 > d2) {
    return 15 * (d1 - d2);
  } else if (y1 === y2 && m1 > m2) {
    return 500 * (m1 - m2);
  } else if (y1 > y2) {
    return 12000;
  } else if (y1 <= y2 || m1 <= m2 || d1 <= d2) {
    return 0;
  }
}

/* Activate if you want to use input in terminal: */
// const actualReturn = prompt("Enter the loan date (dd,mm,yyyy): ");
// const lateReturn = prompt("Enter return date (dd,mm,yyyy): ");

/* RESULT BUDDY 🔥 */
// console.log(libraryBooks(...actualReturn.split(","), ...lateReturn.split(",")));
console.log(libraryBooks(19, 8, 2022, 7, 6, 2022));
