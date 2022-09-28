let operation = prompt("Что сделать? - добавить.отнять.умножить.разделить?");
let aValue = prompt("Первое значение");
let aValueData = parseInt(aValue);
let bValue = prompt("Второе значение");
let bValueData = parseInt(bValue);
// console.log(operation);
console.log(aValue);
console.log(bValue);

console.log("---if section---")
if (operation == "добавить"){
  result = aValueData + bValueData;
}
if(operation=="отнять"){
  result = aValueData - bValueData;
}
if(operation=="умножить"){
  result = aValueData * bValueData;
}
if(operation=="разделить"){
  result =  aValueData / bValueData;
}
console.log(result);
// console.log(resultminus);



console.log("-------------------");

// let userData = prompt('Ваш вік?', '0');
// let procesedUserData = parseInt(userData);
// console.log("Вік юзера ", userData);
// console.log("Доступ до матеріалів ", procesedUserData>18);