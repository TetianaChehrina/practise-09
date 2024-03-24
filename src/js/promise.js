// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise(res => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));
// console.log(5);

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// let num = prompt('Enter something: ');

// const checkNum = function (num) {
//   if (num === null) {
//     return;
//   }
//   return new Promise((resolve, reject) => {
//     const numToNumber = Number(num);
//     if (Number.isNaN(numToNumber)) reject('error');
//     else if (numToNumber % 2 === 0) setTimeout(() => resolve('even'), 1000);
//     else if (numToNumber % 2 !== 0) setTimeout(() => resolve('odd'), 2000);
//   });
// };

// checkNum(num)
//   .then(response => console.log(response))
//   .catch(error => console.log(error));
