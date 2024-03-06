// var/let/const

// text - "text" / 'text' / `text` => they are all strings
// number - 1,2,3.4, 
// boolean - true/false 
// null/undefined/object

// var => let/const

//var userName = "adi.s@gmail.com";
//var age = 25;
//var isSmoking = true;


//console.log("the user name:" + userName + "age is: " + age + " smoking :" + isSmoking)


//var num = 32;
//var asarot = parseInt(num / 10) // parseInt(2) => 2 , parseInt(2.1) => 2 , parseInt(2.5) => 2 
//var ahadot = num % 10;
//var newNum = (ahadot * 10) + asarot
//console.log(newNum)

//page 15 ex.4
var totalMins = 210;
var hours = parseInt( totalMins / 60) 
var Mins = totalMins % 60;
console.log("Movie hour length is: " + hours + " Movie minutes length is: " + Mins + " ")

//page 15 ex.5
var num = 1234
var rn = num % 10 
console.log(rn)

//page 15 ex.6
var num = 1234
var asarot =parseInt(num % 100/10) 
console.log(asarot)

//page 15 ex.7
var num = 567
var meot =parseInt(num/100) 
console.log(meot)

//page 15 ex.8
var num = 56
var ahadot = num % 10; 
var asarot =parseInt(num/10);
var newNum= ahadot + asarot;
console.log(newNum)