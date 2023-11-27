// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else if (month >= 10 && month <= 12) {
      return 4;
    } else {
      return "Invalid Month";
    }
};

// Alternate using a Switch/Case Statement

// const quarterOf = (month) => {
//     switch (Math.ceil(month / 3)) {
//       case 1:
//         return 1;
//       case 2:
//         return 2;
//       case 3:
//         return 3;
//       case 4:
//         return 4;
//       default:
//         return "Invalid Month";
//     }
// };
