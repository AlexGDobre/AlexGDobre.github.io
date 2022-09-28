let operation = prompt("Что сделать? - добавить.отнять.умножить.разделить?");
let aValue = prompt("Первое значение");
let aValueData = parseFloat(aValue);
let bValue = prompt("Второе значение");
let bValueData = parseFloat(bValue);
console.log("операция "+operation);
console.log("первое значение "+aValue);
console.log("второе значение "+bValue);

console.log("---if-выбор---")
if(operation == "добавить"){
  resultplus = aValueData + bValueData;
  result = "Добавили и получили " + resultplus;
}
if(operation=="отнять"){
  resultminus = aValueData - bValueData;
  result = "Отняли и получили " + resultminus;
}
if(operation=="умножить"){
  resultmultiply = aValueData * bValueData;
  result = "Умножили и получили " + resultmultiply;
}
if(operation=="разделить"){
  resultdivide =  aValueData / bValueData;
  result= "Разделили и получили " + resultdivide;
}
console.log(result);



console.log("-------------------");
// let userData = prompt('Ваш вік?', '0');
// let procesedUserData = parseInt(userData);
// console.log("Вік юзера ", userData);
// console.log("Доступ до матеріалів ", procesedUserData>18);