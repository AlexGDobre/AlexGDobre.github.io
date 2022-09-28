let firstName, secondName;
firstName=prompt("YourFirstNameplz");
secondName=prompt("YourSecondNameplz");
console.log(firstName);
console.log(secondName);
document.writeln("Первое имя: "+firstName,
"Второе имя: "+secondName+" .как на некст строку вывести? хз. но думаю скоро узнаю");

// document.getElementById("firstNameData").innerHTML=(firstName);
// document.getElementById("secondNameData").write=(secondName);


let country = prompt("С какой вы страны? uk/ru",);
let countryData = country!="ru" && country=="uk";
console.log(countryData);
if(countryData == false){
  console.log("Ой вы из Англии. наши сервера к вам не достают");
}
if(countryData == true){
  console.log("зисис а тест. проходите");
}