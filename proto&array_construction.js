'use strict';
console.log('2.5. «Прототип и конструктор массива»');
const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

console.log('Задание 1'); // Задание 1

clients.findByName = function (name) {
// исправила
 return clients.find(function(element){
   return element.name === name;
 });
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

const clientThree = clients.findByName('Филип Фрай');
console.log(clientThree.orders); // [ 11700, 1980, 450, 5500 ]

console.log('Задание 2'); // Задание 2

function compareByTotalSumm (left, right){
   const sumOfLeft = left.orders.reduce(function(memo, el){
     return memo + el;
  }, 0);
  
  const sumOfRight = right.orders.reduce(function(memo, el){
     return memo + el;
  }, 0);
  
  if (sumOfLeft < sumOfRight) {
    return -1;
  } else if (sumOfLeft > sumOfRight) {
    return 1;
  } else {
    return 0;
  }
  //удалила
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));

console.log('Задание 3'); // Задание 3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails (list) {
  var arrayOfEmails = [];
  
  //исправила
  list.forEach(function(i){ 
    if(i.isSubscribed === true){ 
      arrayOfEmails.push(i.email); 
    }
  });
      return arrayOfEmails;
}

getSubscribedEmails(clients).forEach(sendMail);

