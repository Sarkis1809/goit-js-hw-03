"use strict";

const countTotalSalary = function (employees) {
  const objSalary = Object.values(employees);
  let total = 0;
  for (let amount of objSalary) {
    total += +amount;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
