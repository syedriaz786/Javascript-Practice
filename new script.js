/// =====VARIABLE=====
// var abc = 123;

// let bcd = "riaz";

// const xyz = "abc";

// console.log(abc,bcd,xyz);

/// ======DATA TYPES OF JAVASCRIPT======

/// ======= STRING TYPE======

// var myname ="Riaz";

// console.log(myname);

// console.log(typeof(myname));

/// ======= NUMBER TYPE======

// var myname = 25;

// console.log(myname);

// console.log(typeof(myname));

// ======= BOOLEAN TYPE======

// var myname = true;

// console.log(myname);

// console.log(typeof(myname));

// ======= NULL TYPE======

// var myname = null;

// console.log(myname);

// console.log(typeof(myname));

// ======= UNDEFINED TYPE======

// var myname;

// console.log(myname);

// console.log(typeof(myname));

// ======= JAVASCRIPT OPERATORS======

// ======= ARTHMETIC OPERATORS======

// ======= plus OPERATORS======

// var a =3;
// var b=4;
// var c;
//  c = a+b;

// console.log(c);

// ======= substaction OPERATORS======

// var a =3;
// var b=4;
// var c;
//  c = a-b;

// console.log(c);

// ======= Multiplication OPERATORS======

// var a =3;
// var b=4;
// var c;
//  c = a*b;

// console.log(c);

// ======= divide OPERATORS======

// var a =3;
// var b=4;
// var c;
//  c = a/b;

// console.log(c);
// ======= Modular OPERATORS======

// var a =3;
// var b=4;
// var c;
//  c = a%b;

// console.log(c);

// ======= Increment OPERATORS======

// for(i=0; i < 10; i++)

// {

//     console.log(i);
// }

// ======= decrement OPERATORS======

// for(i=0; i > -10; i--);

// {

//     console.log(i);
// }

// ======= Exponentation OPERATORS======

// console.log(3**3);

// ======= ASSIGNMENT OPERATORS======

// ======= plus OPERATORS======

// let x = 6;
// let y = 7;

// y += x;

// console.log(y);

// =======SUBSTRACTION OPERATORS======

// let x = 6;
// let y = 7;

// y -= x;

// console.log(y);

// ======= MULTIPLY OPERATORS======
// let x = 6;
// let y = 7;

// y *= x;

// console.log(y);

// ======= DIVIDE OPERATORS======

// let x = 6;
// let y = 7;

// y /= x;

// console.log(y);

// ======= MODULER OPERATORS======

// let x = 6;
// let y = 7;

// y %= x;

// console.log(y);

// ======= EXPONENTATION OPERATORS======

// let x = 6;
// let y = 7;

// y **= x;

// console.log(y);

// ======= NULESH COALESING OPERATORS======

// let user;

// alert( user ??"Guest User");



// ======= COMPERISION OPERATORS======

// ======= equal equal OPERATORS======

// let x = 5;
// let y = 6;

// let z = x==y ;

// console.log(z);

// ======= 3 equal OPERATORS======

// let x = "abc";
// let y = "abc";

// let z = x===y ;

// console.log(z);

// ======= Not Equal OPERATORS======

// let x = "abc";
// let y = "fd";

// let z = x!=y ;

// console.log(z);

// ======= Not  Equal Equal OPERATORS======

// let x = 22;
// let y = 23;

// let z = x!==y ;

// console.log(z);

// ======= Greater than OPERATORS======

// let x = 22;
// let y = 23;

// let z = x > y ;

// console.log(z);

// ======= Greater than Equal to OPERATORS======

// let x = 22;
// let y = 22;

// let z = x >= y ;

// console.log(z);

// =======Less than OPERATORS======

// let x = 22;
// let y = 28;

// let z = x < y ;

// console.log(z);

// =======Less than Equal OPERATORS======

// let x = 22;
// let y = 21;

// let z = x <= y ;

// console.log(z);

// =======Ternary OPERATOR======

// let is_logged_in = 0;

// let option = is_logged_in == 1 ? "Logout" : "Login";

// console.log(option);

// or

// let is_logged_in = 0;

// let option = is_logged_in == 1 ? "Logout" : "Login" ? "Welcome User" : "Bye";

// console.log(option);

// =======Logical OPERATOR======

// let x =5;
// let y = 8;

// let z = x == 5 && y==7;

// console.log(z);

// =======OR OPERATOR======

// let x =5;
// let y = 8;

// let z = x == 5 || y==4;

// console.log(z);

// =======NOT OPERATOR======

// const a = 3;
// const b = 2;

// console.log(!(a > 0 || b > 0));

// =======IF ELSE CONDITION======

// let age = 14;
// if (age >= 14)
// {
//   alert("You Can Vote");

// }

// ============

// let age = 14;
// let hasvotercard = "Yes";

// if (age === 14  && hasvotercard === "Yes"){
//   console.log("You can vote");

// }

// else{
//   console.log("get out");
// }

// =======NESTED IF ELSE CONDITION======

// let age = 14;
// let hasVoterCard = "Yes";

// if (age >= 14){
//   if(hasVoterCard =="Yes"){
//     alert("You Can Vote")
//   }
//   else{
//     alert("Get Your Voter id Card !");
//   }
// }
// else{
//   alert("You Can not Be voted !");
// }

// =======Switch CONDITION======

//   let input = "";

//   input = "Yes";

//   switch (input){
//     case 1:
//         document.write("continue...");
//         break;

//   case "Y":
//     document.write("continue...");
//     break;

// case "Yes":
//   document.write("continue...");
//   break;

//   case 0:
//     document.write("End...");
//     break;

// case "N":
// document.write("End...");
// break;

// case "No":
// document.write("End...");
// break;
// default:
//   document.write("wrong Input");
// }

// =======Switch CONDITION USing short method======

//   let input = "";

// input = "No";

// switch (input){
//   case 1:
//   case "Yes":
//   case "Y":
//       document.write("continue...");
//       break;

//         case 0:
//         case "No":
//         case "N":
//             document.write("End...");
//             break;
//         default:
//         document.write("wrong input");
// }

// =======For Loop======

// for (let i =1 ; i <=10; i++ )
// {
//   document.write("Riaz<br>");

// }

// =======For Break Loop======

// for (let counter =1 ; counter <=10; counter++)
// {

//   if(counter ==5){
//     break;
//   }
//   document.write(counter + "<br>");

// }

// =======For continue Loop======

// for(let counter = 1; counter <=10; counter++)
// {
//   if(counter ==5){

//     continue;

//   }
//   document.write(counter + "<br>");
// }

// ======= Nested For Loop======

// for (let counter =1;counter<=10; counter ++)
// {
//   document.write(counter);
//   document.write('<br>');

//   for(let counter2 = 1;counter2 < 3;counter2++)
//   {
//     if(counter ==3){
//       break;

//     }
//     document.write('Riaz<br>');

//   }
// }

// =======Nested For loop Using Continue Loop======

// for (let counter =1; counter <=10; counter++)
// {

//   document.write(counter);
//   document.write('<br>');

//   for (let counter2 =1; counter2 < 3; counter2 ++ ){

//     if ( counter ==3){
//       continue;

//     }
//     document.write('Riaz');
//   document.write('<br>');
//   }
// }

// =======ALERT======

// alert("this is denger");

// =======PROMPT======

//  prompt("Enter Your  name");

// =======confirm======

// confirm("ARE YOU SURE TO PRESS THIS BUTTON");


// ==========TYPE CONVERSION===========

// ======check type============

// let type =  "3";
//  alert(typeof type);

//  let type2 =  3;
//  alert(typeof type2);

//  let type3 =  "hello";
//  alert(typeof type3);

//  let type4 =  true;
//  alert(typeof type4);

// ====NOW CHANGE TO STRING TYPE============

// let type = 4;

// console.log (typeof type);

// let newtype = String(type);

// console.log(typeof newtype);

// =======NOW CHANGE NUMBER TYPE============

// let type = "hello";

// console.log (typeof type);

// let newtype = Number(type);

// console.log(newtype);

// console.log(typeof newtype);

// =======NOW CHANGE BOOLEAN TYPE============

//   let type = "hello";

// console.log (typeof type);

// let newtype = Boolean(type);

// console.log(newtype);

// console.log(typeof newtype);

// =====================STRING MANIPULATION============

// ====ADD NEW LINE====

// let str = "M \n Riaz";

// console.log(str);

// ====ADD BACK SLASH========

// let str = "M \\ Riaz";

// console.log(str);

// =====ADD TAB==========

//  let str = "M  \t Riaz";

// console.log(str);

// ======ADD DOUBLE QOUTATION====

// let str = "M  \" Riaz";

// console.log(str);

// =======ADD SINGLE QOUTATION=========

//     let str = "M  \' Riaz";
// console.log(str);

// ======CHECK LENGTH============

// let str = "M Riaz"

// let str1 = str.length ;

// console.log(str1);

// ========PRINT PARTICULAR WORDS=======

//  let str = "M Riaz"

// console.log(str[4]);

// ========CONCATINATE VARIRABLE =========

// let str = "Mr";
// let str2 = "Riaz";

// console.log(str + "the" + str2);
// console.log(str + str2);

// ======CAMPARE VARIRABLE ============

// let str = "Riaz";

// if ("Riaz" == str){
//   console.log("Equal");

// }
// else{
//   console.log("Not Equal");
// }

// ====CONCATINATE VARIRABLE METHOD ======

// let str = "Riaz";
// let str2 = "Khan";

// let str3 = str.concat(" ", str2);

// console.log(str3);

// =====SUB STRING METHOD ============

// let str = "This is Javsscript Tutorial. It is a good Tutorial";
// let substring = str.substr(8,19);
// console.log(substring);

// =====================INDEXOF METHOD ============

//      let str= "This is Javsscript Tutorial. It is a good Tutorial";

//    let position = str.indexOf('is');

//  console.log(position);

//   OR

//   let position1 = str.indexOf('is', 10);

//  console.log(position1);

// === 'if check from last' INDEXOF METHOD =======

//  let str= "This is Javsscript Tutorial. It is a good Tutorial";

//     let position = str.lastIndexOf('is');

//   console.log(position);

// =====================TRIM METHOD ============

// Using for removing space

// let str = " This Is Good Tutorial ";
// let trimstr = str.trim();

// let trimstr1 = str.trimStart();

// let trimstr2 = str.trimEnd();

// console.log(str);
// console.log(trimstr);
// console.log(trimstr1);
// console.log(trimstr2);

// ================UPPER OR LOWER CASE METHOD ============

// let str = "This is Javsscript Tutorial. It is a good Tutorial";

//   let trimstr = str.toLowerCase();  //  <<<<===== FOR LOWER CASE

//   let trimstr1 = str.toUpperCase();  //  <<<<===== FOR UPPER CASE

//   console.log(trimstr);
//   console.log(trimstr1);

// =====================REPLACE 'WORD OR LETTER' METHOD ============

// let str = "This is Javsscript Tutorial. It is a good Tutorial";

// let replacestr = str.replace('good','the best');

// console.log(replacestr);

// =======INCLUDE 'check word or letter in paragraph and tell word or letter available or not' METHOD ============

// let str = "This is Javascript Tutorial. It is a good Tutorial";

// let includestr = str.includes("Javascript");

// console.log(includestr);

// =====================ARRAY============

//  ==== 1st PROCEDURE TO DEFINE ARRAY=====

//  let Book = ["Urdu","Math", "English", "Bio", "Computer Science"];

//  console.log(Book);
//  console.log(Book[0]);

//  ====== 2nt PROCEDURE TO DEFINE ARRAY======

// let Book = new Array("Urdu","Math", "English", "Bio", "Computer Science");

// console.log(Book);
//  console.log(Book[0]);

// ======= MAKE AN EMPTY ARRAY=====

// let Book = [];

// console.log(Book);

// =====UPDATE OR CHANGE VALUE OF ARRAY=====

// let Book = new Array("Urdu","Math", "English", "Bio", "Computer Science");

// Book[1] = "Chinease";

// console.log(Book);

// =========ADD VALUE IN ARRAY===

// let Book = new Array("Urdu","Math", "English", "Bio", "Computer Science");

// Book.push("Social Studies");
// console.log(Book);

// ========ADD VALUE ON 1st PLACE IN ARRAY=====

// let Book = ["Math","Urdu","English","Physics"];

// Book.unshift("Computer");

// console.log(Book);

// ======ADD VALUE ON LAST PLACE IN ARRAY=======

//  let Book = ["Math","Urdu","English","Physics"];

//  Book.push("XYZ");

//  console.log(Book);

// =======DELETE 1st VALUE OF IN AN ARRAY======

//  let Book =["Urdu","English","Math","Physics"];

//  Book.shift();

//  console.log(Book);

// ===========DELETE BETWEEN VALUE OF IN AN ARRAY======

// is me hum ne bataya hai kahan se kahan tk value ko delete krna hai

//  let Book =["Urdu","English","Math","Physics","Computer"];

//  Book.splice(1,3);

//  console.log(Book);

// ======DELETE LAST VALUE OF IN AN ARRAY========

// let Book = ["Urdu","English","Math","Physics"];

// Book.pop();

// console.log(Book);

// ======CHECK LENGTH OF ARRAY======

// let Book = ["Math","Urdu", "English"];

// console.log(Book.length);

// =====CHECK POSITION VALUE IN ARRAY======

//  let Book =["Urdu","Bio","English","Math","Physics"];

//       let position = Book.indexOf("Bio");

//       console.log(position);

// =====iss  may hr word ko ARRAY banaye ge=======

// let justtext = "This is a random Text";

//  let wordarray = justtext.split(' ');

//  console.log(wordarray);

// wordarray = justtext.split("T");

// console.log(wordarray);

// ======JOIN ARRAY VALUE AND TERMINATE ARRAY============

// let Book = ["Math", "Physics", "Urdu", "Bio"];

// let wordarray = Book.join(" "); 

// console.log(wordarray);

//  wordarray= Book.join('-');

//  console.log(wordarray);

// ======COMBINE OR CONCAT MULTIPLE ARRAY========

//  let Book = ["Math","Urdu","English","Physics"];

//  let Book2 = ["Social Std", "Sindhi"]

//  let Book3 = ["Punjabi", "Chemistry"];

//  let newBook = Book.concat(Book2, Book3);

//  console.log(newBook);

// ========MULTI DIMENTIONAL ARRAY====

//  let bookWithPage = [
//    ["Math","300"],
//    ["English","200"],
//    ["Urdu","184"]
//   ];

//     console.log(bookWithPage);

//   let fatch = bookWithPage[2][1];

//   console.log(fatch);

// ======LOOP THROUGH ARRAY=======

//  let book = ["Math","Physics","Computer Science","Urdu"];

//  let booklength = book.length;

//  for (i= 0; i < booklength; i++)
// {
//   console.log (`Element ${i} is ${book[i]} \n`);

// }

// ======="FOREACH"FUNCTION ARRAY========

// let book =["Math", "Physics","Bio","English"];

// book.forEach(xyz);

// function xyz(abc) {

//    console.log(abc);

// }

// ======================= FUNCTION===========================

// TWO TYPE OF FUNCTION

// 1. USER DEFINED FUNCTION

// 2. PREDEFINED Function

// ==============DEFINE FUNCTION===============

// function abc (xyz){

//   console.log("Syed Riaz");
// }
// abc();

// =========================ANOTHER DEFINE FUNCTION =================

// function MultiTable(){

//   for (i=1 ; i <= 10 ; i++){

//     document.write(`2 + ${i} = ${2*i} <br>`);
//   }
// }
// MultiTable();

// ================ANOTHER DEFINE FUNCTION USING PARAMETER AND ARGUMENT =================

// function abc(num){

//   for (i=1; i<10; i++){

//     document.write(`${num} * ${i} = ${num * i} <br>`)

//   }

// }
// abc(5);

// document.write(`NEXT TABLE IS <br>`);

// abc(13);

// ===================== DOUBLE PARAMETER AND ARGUMENT in FUNCTION=================

// function add (num1, num2){

//   console.log(num1+num2);

// }
// add(4,5);

// =========================ARGUMENT OBJECT =================

// is me hm parameter dia baghair Argument pass karain ge.

// function add(){

//   console.log(arguments.length);

// }
// add(4);
// add(5,6,3);
// add(5,6,2,5,7,2);

// =========USING ARGUMENT OBJECT IN IF CONDITION =================

// function add(){

//   if (arguments.length == 0){

//     console.log("No Argument Passed!");
//   }
//   else{

//     let sum = 0;

//     for(let i=0; i< arguments.length; i++ ){
//       sum = sum + arguments[i];
//     }
//     console.log(sum);
//   }
// }

// add(4,5,2);

// ===============OR AGR KISI FUNCTION KO VARIABLE ME DALNA HO TO ===============
// function add(){

//   if (arguments.length == 0){

//     console.log("No Argument Passed!");
//   }
//   else{

//     let sum = 0;

//     for(let i=0; i< arguments.length; i++ ){
//       sum = sum + arguments[i];
//     }
//     console.log(sum);
//   }
// }

// let addition = add;

// addition(5,6);

// ==========RETURN IN FUNCTION================

// function add(a,b){

//   let c = a+b;
//   return c;
// }

// let d = add (5,9);

// console.log(d);

// =======USING RETURN  IN CONDITION================

// function campare(a,b){

//   if (a > b){
//     return 1;
//   }

//   else if (b > a ){
//     return -1;
//   }

//   else {
//     return 0;

//   }

// }
// let c =campare (5,6);

// console.log(c);

// ===================GLOBAL VARIABLE VS LOCAL VARIABLE================

// let car = "Audi";   // <====== THIS IS GLOBEL VARIABLE

// function add(){

//   let result = 33;  // <=============== THIS IS LOCAL VARIABLE
// }

// add();

// ===================ANONYMOUS FUNCTION================

// let abc = function () {

//   console.log("Hello")
// }

// abc();

//======2nd EXAMPLE OF ANONYMOUS FUNCTION=====

// setTimeout(function(){

//   console.log("Hello");
// },3000);

// =======IMMEDIATELY INVOKED FUNCTION======

// is ko hum jb use krty han jb hme koi kam foran krana ho

// (function(){
//   let string = "Hello !";

//   console.log(string);
//   alert(string);
// })

// ();

// ======================OBJECT==================

// let person = {

//         firstName : "Syed",
//         lastName : "Riaz"
// };
// console.log(person);

//         // OR

// console.log(person.firstName);

// ======UPDATE OBJECT VALUE==========

// let person = {

//   firstName : "Syed",
//   lastName : "Riaz"
// }

// person.firstName = "Muhammad"

// console.log(person);
// console.log(person.firstName);

// =========ADD OBJECT VALUE===========

// let person = {

//   fname : "M",
//   lname : "Riaz"
// };

// person.age = 25;

// console.log(person);

// ======DELETE OBJECT VALUE=========

// let person = {

//   fname : "M",
//   lname : "Riaz"

// };

// delete person.lname;

// console.log(person);

// =====CHECK PROPERTY EXIST OR NOT IN OBJECT=========

//   let person = {

//   fname : "M",
//   lname :"Riaz"
//   }

//   console.log('fname' in person);
//   console.log('lastname' in person);

// =====CHECK OBJECT PROPERTIES WITH VALUE USING "FOR IN LOOP"========

    // let person ={

    // fname : "M",
    // lname : "Riaz",
    // age   : 25

    // }
// for (let key in person){

//   console.log(key);
//   console.log(person[key]);

// }

//          OR
// for (let key in person){

//    console.log(`${key} : ${person[key]} \n`);
// }

// =====METHOD OR FUNCTION IN OBJECT========

// 4 TAREEQO SE METHOD BANA SKTY HAN.

// for example : hm aik person banaty han or usko kch action perform krne ko bolty han
//  bolty han function ya method k zarye se , for example hum is person ko bole ge wo bole  hello
//  to ye kese hoga wo dekhty han

// ye 1st tareeqa hai object ko method assign krne ka
// ye tareeqa ES6 me define kia gaya

// let person = {

//   fname : "M",
//   lname : "Riaz",
//   sayhello (){

//     console.log("HHHeeeelllooo !");

//   }

// }

// person.sayhello();

// ye 2nd tareeqa hai object ko method assign krne ka

// let person = {

//   fname : "M",
//   lname : "Riaz",
//   sayhello : function(){

//     console.log("Heeeelllooo !");

//   }

// }

// person.sayhello();

// ye 3rd tareeqa hai object ko method assign krne ka

// let person = {

// fname : "M",
// lname : "Riaz"

// }
// person.age = 25;

// function greet (){

//   console.log("Helloooo !");
// }

// person.sayhello = greet;

// person.sayhello();

// ye 4th tareeqa hai object ko method assign krne ka

// let person = {

//       fname : "M",
//       lname : "Riaz"

// }
// person.age = 25;

// person.sayhello = function(){

//   console.log("Hello !");

// }

// person.sayhello();.

// ========================"THIS" KEYWORD USE IN OBJECT====================

// let person ={

//         fname :"Syed",
//         lname : "Riaz",

// sayhello (){

//         console.log ("Hello !  i m "  +  this.fname + " and i have a " + car.brand + " car");

// }
// }

// let car = {
//   brand : "Audi",
//   model : "x5"
// }

// person.sayhello();

// =================================================================

// ========================MATH OBJECT====================

// console.log(Math.PI);    // 1.

// console.log(Math.E);      // 2.

// console.log(Math.SQRT2);  // 3.

// console.log(Math.LN10);   // 4.

//   console.log(Math.LN2);    // 5.

//   console.log(Math.LOG2E);  // 6.

//   console.log(Math.LOG10E); // 7.

// ========= Math.ROUND <==  IS ME AGR 0.5 ZERO POINT 5 SE ZIADA VALUE HAI TO 1 KR DAIGA NHI TO 0 REHNE GA====

// let x =Math.round(4.7);

// console.log(x);

// ============ Math.CEIL <== Is me 1.1  POINT k bad kch bhi value ho wo USKO BARHA KR AGLA NUMBER KR DAINGA

// let x =Math.ceil(4.1);

// console.log(x);

// ========= Math.floor <== Is me .5 ZERO POINT k bad kch bhi value ho wo ACTUAL VALUE HI CONSIDER KRE Ga

// let x =Math.floor(4.7);

// console.log(x);

// =========== Math.TRUNC <== Is me . POINT k bad kch bhi value hoGI wo USKO HATA KR BATAYE GA

// let x =Math.trunc(4.7);

// console.log(x);

// ======= Math.POW <== Is me VALUE POWER SE MULTIPLY HOGI

// let x =Math.pow(2, 5);

// console.log(x);

// ====== Math.SQRT <== Is me HUM SQURE ROOT NIKALTY HAN

// let x =Math.sqrt(4);

// console.log(x);

// ========= Math.MIN <== IS ME YE MINIMUM NUMBER NIKAL KR DAIGA JITNI BHI VALUE APNE DI HAN

// let x =Math.min(4, 45, -4, 1000, 34, 89);

// console.log(x);

// ====== Math.MAX <== IS ME YE MAXIMUM NUMBER NIKAL KR DAIGA JITNI BHI VALUE APNE DI HAN

// let x =Math.max(4, 45, -4, 1000, 34, 89);

// console.log(x);

// ============================RANDOM NUMBER========================

// let x = Math.random(); // <== GENERATE 0 TO 0.99999999

// console.log(x);

// =========ANOTHER EXAMPLE  OF RANDOM NUMBER=======

// let x = Math.random() * 10; // <== ab ye 0 se 9 k darmiyan number dega.

// console.log(x);

// let x = Math.floor(Math.random() * 10); //  <=== agr hame point k bad ki value hatani ho to

// console.log(x);

// let x = Math.floor(Math.random() * 10) + 1;

// console.log(x);

// ===============================

// function getrandom(min,max){

// let x = Math.floor(Math.random() * (max - min + 1) + min); // <== Here using formula

// return x;

// }

// console.log(getrandom(10, 20));

// ====================== DATE OBJECT=============================

// let x = new Date;

// console.log(x);

// let x = new Date(2021, 10, 05, 12, 26, 45, 10); // <== you can pass 7 parameter

// console.log(x);

// OR

// let x = new Date("October  13, 2019 11:12:33");  // <== hum jis tarhan se chahe date format ko change kr skty han

// console.log(x);

// OR           hum DATE OR TIME KO SEPARATE KR BHI DEKH SKTY HAN

// let x = new Date("October  13, 2019 11:12:33");

// console.log(x);

// console.log(x.getFullYear());

// console.log(x.getMonth());

// console.log(x.getDate());

// console.log(x.getDay());    

// console.log(x.getHours());

// console.log(x.getMinutes());

// console.log(x.getSeconds());

// console.log(x.getMilliseconds());

// =====NOW WE CHANGE DATE========

// let x = new Date("October  13, 2019 11:12:33");

// x.setFullYear(2022);

// console.log(x);

// x.setMonth(5);

// console.log(x);

// x.setDate(30);       // <==

// console.log(x);

// x.setHours(2);

// console.log(x);

// ====OR AGR HAME KOI BOLE K AJJ SE THEK 50 DAYS BAD KIA DATE HOGI WO PRINT KRWAO TO=======

// let x  = new Date("October  13, 2019 11:12:33");
// let y  ;

// y.setDate(x.getDate()+ 50);

// console.log(x);
// console.log(y);

// ====== NOW WE COMPARE DATE=======

// let x = new Date("October 13, 2019 11:12:33");

// let y =new Date();

// if(y > x){

//   console.log("X is Past Date ");

// }
// else if (x > y){

//   console.log("X is Future Date");

// }

// else{

//   console.log("X is same Date");
// }

// ================= " NEW kEYWORD" using object============

// let person = new Object();

// person.name ="Syed Riaz";
// person.age = "25";

// console.log(person.name);

// ================= GETTER and SETTER PROPERTIES====================

// ===========GETTER==

// let person = {

//       name: "Riaz",
//       age : "27",

// get getname() {     // <------ JUB BHI HAME VALUE CHANGE, ADD YA DELETE KR K PRINT KRANI HOTI HAI TO HUM GET USE KRTY HAN

//       return this.name.toUpperCase();

// }

// }

// console.log(person.getname);

// ===========SETTER==

// let person = {

//       name: "Riaz",
//       age: 27,

// set setname(n){   //  <--- SETTER HUM JUB USE KRTY HAN JB HUME bad me value change krni ho save kraty waqt

//        this.name = n.toUpperCase();

// }

// };
// person.setname = "syed";

// console.log(person.name);

// ==============CONSTRUCTOR FUNCTION   (ES 5)==============

// function Student (fst, lst, ag, cls){

//     this.fname = fst;
//     this.lname = lst;
//     this.age = ag;
//     this.class = cls;

// }

// let student1 = new Student("Syed", "Riaz", "26", "16");

// console.log(student1);
// console.log(student1.lname);

// =======ADD PROPERTY IN CONSTRUCTOR==========

// function Student (fst, lst, ag, cls){

//   this.fname = fst;
//   this.lname = lst;
//   this.age = ag;
//   this.class = cls;

// }

// let student1 = new Student("Syed", "Riaz", "26", "16");

// let student2 = new Student("S", "R", "265", "156");

// student1.nationality ="Pakistani";

// console.log(student1);
// console.log(student2);

// ========ADD METHOD OR FUNCTION IN CONSTRUCTOR========

// function Student (fst, lst, ag, cls){

//   this.fname = fst;
//   this.lname = lst;
//   this.age = ag;
//   this.class = cls;

// }

// let student1 = new Student("Syed", "Riaz", "26", "16");

// student1.nationality ="Pakistani"

// student1.uppercase = function(){

//         return this.fname.toUpperCase();

// }

// console.log(student1.uppercase());

// ==============OBJECT PROTOTYPE==============

// function Student (fst, lst, ag, cls){

//     this.fname = fst;
//     this.lname = lst;
//     this.age = ag;
//     this.class = cls;

// }
// Student.prototype.nationality = "Pakistani"; // <--- is tarhan hm aik constructor me property add kr skty han using prototype

// let student1 = new Student("Syed", "Riaz", "26", "16");

// console.log(student1);
// console.log(student1.nationality);

// ======ADD FUNCTION OR METHOD USING PROTOTYPE=======

// function Student (fst, lst, ag, cls){

//   this.fname = fst;
//   this.lname = lst;
//   this.age = ag;
//   this.class = cls;

// }
//  Student.prototype.uppercase = function(){

//        return this.fname.toUpperCase();

//  }

// let student1 = new Student("Syed", "Riaz", "26", "16");

// console.log(student1);
// console.log(student1.uppercase());

// ============NESTED OBJECT===================

// var user = {

//   id : 101,
//   email : "abc@gmail.com",
//   personalinfo :{

//         name: "Riaz",
//         lastname: "xyz",

//         address : {

//           street :"gulshan",
//           city:"karachi",
//           country: "pakistan"

//         }
//   }

// }
// console.log(user);
// console.log(user.id);
// console.log(user.personalinfo);
// console.log(user.personalinfo.address);
// console.log(user.personalinfo.address.city);

// ==============HOISTING===========

// hoisting hame ye btata hai k hame pehle 1. declaration hai. 2. assign krna hai. 3. call krna hai.

// wrong syntax

// console.log(x);
// x=7;
// var x;

// correct syntax but in this case we did declaration in last ;

// x=7;
// console.log(x);
// var x;

// correct syntax

// var x;
// var = 7;
// console.log(x);

//=========SELECT ELEMENT BY ID===========

// let elm = document.getElementById("first");

// console.log(elm);
// console.log(elm.innerHTML);

//=========SELECT ELEMENT BY CLASS NAME "using for loop"=========

// is me hum same class name 2 tags ko denge or usko for loop k throuh aik aik kr k nikale.

// let elm = document.getElementsByClassName("cl");

// for(i=0; i<elm.length; i++){

//   console.log(elm[i].innerHTML);

// yahan hum ne por li tag ko hata kr p tag se change dia .

//   elm[i].innerHTML ="<p> Hello</p>"
// }

//=========SELECT ELEMENT BY TAG NAME"============

// let elm = document.getElementsByTagName("li")

// for (i = 0 ; i < elm.length; i++){

//   console.log(elm[i].innerHTML);
//   elm[i].innerHTML = "<h1> Syed Riaz </h1>"

// }

//===========QUERY SELECTOR==========

// let elm = document.querySelector("p.intro");

// yahan hm sirf  aik <p class="intro"> ko select kr rhe han using queryselector se

// console.log(elm.innerHTML);
// console.log(elm);

//===========QUERY SELECTOR ALL=========

// or jub hum sare <p class="intro"> ko uthe ge to hm queryselectorAll ka instemal kare ge.

// let elm = document.querySelectorAll("p.intro");

// console.log(elm);
// for (let i = 0; i< elm.length; i++){

//   console.log(elm[i].innerHTML);
// }

//OR         2nd way to use query selector All

//   let elm = document.querySelectorAll(".intro");

// console.log(elm);
// for (let i = 0; i< elm.length; i++){

//   console.log(elm[i].innerHTML);

// }

// ========== TRAVERSING ELEMENTS============

//========== select PARENT Element of any tag

// let elm = document.getElementById("intro");

// let prt = elm.parentElement;

// console.log(prt);

//OR

// let  prt1 = elm.parentElement.innerHTML;

// console.log(prt1);

//============select child Element of any tag

// select firstElement
// let elm = document.getElementById("intro");

// let node = elm.firstElementChild;

// console.log(node);

// ===========================

// select last element
// let elm = document.getElementById("intro");

// let node = elm.lastElementChild;

// console.log(node);

// ============================

// select ALL CHIDREN element
// let elm = document.getElementById("intro");

// let per = elm.children;

// console.log(per);

//    OR

// let elm = document.getElementById("intro");

// let per = elm.children;

// for (let key in per){

// console.log(per[key].innerHTML);
// }

//=======select siblings Element of any tag==============

// select 1st Sibling  element
// let elm = document.getElementById("intro");

// let node = elm.previousElementSibling;

// console.log(node);

//===========inner HTML===============

// let elm = document.getElementById("div2");

// let content = elm.innerHTML;

// console.log(content);

// ============"CREATE" and "APPEND" element==========

// let elm = document.getElementById("intro-div");

// let h1 = document.createElement('h1');

// let text = document.createTextNode("I create h1 tag and his under text also");

// h1.appendChild(text);

// elm.appendChild(h1);

// ======agar hame body me add krna hai===

// document.body.appendChild(h1);

// ========ADD "CLASS" and "ID" in TAG or ELEMENT===========

// let elm = document.getElementById("intro-div");

// let h1 = document.createElement('h1');

// let text = document.createTextNode("I create h1 tag and his under text also");

// ADD CLASS
// h1.className ="heading main-haeading";

// ADD ID
// h1.id = "testingid";

// h1.appendChild(text);

// elm.appendChild(h1);

// ======agar hame body me add krna hai koi tag===

// document.body.appendChild(h1);

// =========== "INSERT" BEFORE AN "TAG"=============

// is me hum tag ko kahi bhi ADD kr skty han

// let list1= document.getElementById("list");

// let item  = document.createElement("li");

// item.textContent = "new list 4";

// let pos = list1.firstElementChild;

// list1.insertBefore(item, pos);

// OR agar hame body me kahi add krna hai to wo aise add krain ge.

// let parent = document.body;

// let h2 = document.createElement('h2');

// h2.textContent="This IS H2 Heading";

// let list1 = document.getElementById("list");

// parent.insertBefore(h2, list1);

// =========== "REMOVE" CHILD ELEMENT=============

// let parent = document.getElementById("list");

// let elm = parent.firstElementChild;

// or

//  elm = parent.firstElementChild.nextElementSibling;

// parent.removeChild(elm);

// =========== CLONE ELEMENT=============

// let menu = document.getElementById("menu");

// let cloneElm = menu.cloneNode(true);    // or we use (); for false

// cloneElm.id = "mobile-menu";
// document.body.appendChild(cloneElm);

// =========== REPLACE ELEMENT=============

// let parent =document.getElementById('menu');

// let item=document.createElement("li");
// item.textContent ="Mega Services";
// let replace = parent.firstElementChild.nextElementSibling;
// parent.replaceChild(item, replace);

// =========== INSERT ADJACENT HTML=============

// is me hume 4 position pr tag add krne facility milti Hai

// 1. before begin

// 2. after begin

// 3. before end

// 4.  after end

// let elm = document.getElementById("adjacent-div");

// let html = "<h1> This is h1 tag </h1>";   // <=== is "INSERT ADJACENT HTML" ki ye khoobi hai k ye content ko bhi tag me change kr daita hai

// elm.insertAdjacentHTML("beforebegin", html);  // 1. before begin

// elm.insertAdjacentHTML("afterbegin", html);   // 2. after begin

// elm.insertAdjacentHTML("beforeend", html);  // 3. before end

// elm.insertAdjacentHTML("afterend", html);  // 4.  after end

// =========== ADD CHANGE ATTRIBUTE=============

// let btn = document.getElementById("btn");

// btn.setAttribute("name", "form1");
// btn.setAttribute("class", "form2");
// btn.setAttribute("type", "submit");

// check value of attribute

// let btn = document.getElementById("btn");

// btn.setAttribute("name", "form1");

// let val = btn.getAttribute("name");

// console.log(val);

// NOW WE REMOVE ATTRIBUTE

// let btn = document.getElementById("btn");

// btn.setAttribute("name", "form1");

// let val = btn.removeAttribute("name");

//  now we check attribute available or not

// let btn = document.getElementById("btn");

// let val = btn.hasAttribute("name");

// console.log(val);

// ===========CHANGE INLINE STYLE=============

// 1st WAY to change inline style

// let btn = document.getElementById("btn");

// btn.style.cssText ="background-color:red; color: green; border-radius: 10px; width:100% ";

// 2nd WAY to change inline style

// let btn = document.getElementById("btn");

// btn.setAttribute('style', 'color:white; background-color:red; width: 100%; height:10%;')

// 3rd WAY to change inline style

// let btn = document.getElementById("btn");

// btn.style.background = "red";  btn.style.color = "yellow";

// ==========GET COMPUTED CSS=============

// IS ME HUM JAVASCRIPT KI MADAD SE CSS STYLING DEKHNE KI KOSHISH KARE GE

// let btn = document.getElementById("btn");

// let cssVar = getComputedStyle(btn);

// console.log(cssVar.backgroundColor);
// console.log(cssVar.color);

// ========== ADD CHANGE CSS CLASS=============

// first hum is tag ki classes dekhe ge

// let box = document.getElementById("box");

// console.log(box.className);

// second hum is me  class add kare ge

// let box = document.getElementById("box");

// box.className  += " dim test";

// third  hum is me sari  class console pr dekhe ge

// for(let i = 0; i <= box.classList.length; i++){

//   console.log(box.classList[i]);
// }

// or

// for (let css of box.classList){

//   console.log(css);
// }

// ==============================================================

// ============ DOM EVENTS IN JS================

// TWO WAY TO DEFINE OR USE EVENTS

// 1st  IS, CALL EVENTS IN TAGs IN HTML FILE

// 2nd IS, ALL IN JS FILE

// SO 1ST ONE IS.......

// function btnClick(){

//   alert("Button was Clicked ");
// }

// 2nd IS, ALL IN JS FILE

// let btn = document.getElementById("btn");

// btn.addEventListener('click', function(){

//   alert("Button Was Clicked By js")
// })

// we can used more than one events on one tags or element

// let btn = document.getElementById("btn");

// 1st event is click event
// btn.addEventListener('click', function(){

//   console.log("Button Clicked")
// })

// 2nd event is mouse over
// btn.addEventListener('mouseover', function(){

//   console.log("Mouse over")
// })

// 3rd event is mouse out
// btn.addEventListener('mouseout', function(){

//   console.log("Mouse out")
// })

// DEFINE HOW TO MAKE  EVENT LISTENER AND HOW  TO CALL IT

// 1st way to make and call event listener

// let btn = document.getElementById("btn");

// 1st event is click event
// btn.addEventListener('click', function(){

//   console.log("Button Clicked")
// })

//  2nd way to make and call event listener

// is me hum aik complete function banaty han or is lia banaty han k hame pta hota hai k hum isse bar bar use krain ge to is situation me hum is ko aik bar hi complete bana laity han or jahan bhi zarorat pare to sirf call kra lain

// let btn = document.getElementById("btn");

// function clickFunc(){

// console.log("Button Was CLicked!");
// }

// btn.addEventListener('click', clickFunc);

// REMOVE  EVENT LISTENER

// let btn = document.getElementById("btn");

// function click1(){
//   console.log("Click1 Activated");

// }

// btn.addEventListener('click', click1);

// btn.removeEventListener('click', click1);

//PAGE LOAD EVENT LISTENER

// IN THIS EVENT LINSTENER WE HAVE TWO TYPE OF PAGE LOAD EVENT

// 1. "DOMCONTENTLOADED" is me, agr hum chahty han page load hone k sath sath hi hum apna event bhi load krain to hum DOMCONTENTLOADED ka istemal krain ge

// window.addEventListener('DOMContentLoaded',  () =>{

// console.log("DomEventloaded  event run  ");
// });

// 1. "load" is me, agr hum chahty han page load hone k bad event run ho hum "load" run karin ge

// window.addEventListener('load', function(){

//   console.log("load event run");
//   });

//MOUSE EVENT

// CLICK EVENT
// function fun(){
//   alert("ONCLICK EVENT CALL");
// }

// CONTEXTMENU EVENT
// is me right click krne par event trigger hoga
// function fun(){
//   alert("RIGHT CLICK EVENT CALL");
// }

// DOUBLE CLICK EVENT

// function fun(){
//   alert("DOUBLE CLICK EVENT CALL");
// }

//  MOUSE CLICK UP EVENT

// function fun(){
//   alert("MOUSE CLICK UP EVENT CALL");
// }

//MOUSE CLICK DOWN EVENT

// function fun(){
//   alert("MOUSE CLICK DOWN EVENT CALL");
// }

//MOUSE OVER EVENT

// function fun(){
//   alert("MOUSE OVER EVENT CALL");
// }

//MOUSE OUT EVENT

// function fun(){
//   alert("MOUSE OUT EVENT CALL");
// }

//KEYBOARD EVENT

// KEY DOWN EVENT

// window.addEventListener('keydown', checkkey);

// function checkkey(e){

//   console.log(e.key);

// }

// KEY UP EVENT

// window.addEventListener('keyup', checkkey);

// function checkkey(e){

//   console.log(e.key);

// }

//SCROLL EVENT

// USING SCROLL EVENT
// window.addEventListener('scroll', () =>{

//   console.log("scrolling..........")
// } );

// ANOTHER EXAMPLE OF SCROLL EVENT WITH THE HELP OF "WHEEL"

// USING WHEEL EVENT " WHEEL EVENT PARAMETER PASS KRTA HAI FUNCTION ME JO HUM DEFINE KRTY HAN LKN SCROLL EVENT PARAMETER PASS NHI KRTA"

// window.addEventListener("wheel", (event) =>{

//   if (event.deltaY < 0)
//   {
//     console.log("scrolling upp....")
//   }
//   else if (event.deltaY > 0){

//     console.log("scrolling down....")
//   }
// });

// NOW WE ARE PRACTICALLY CHECK HOW TO USE IT SCROLL EVENT

// window.addEventListener('scroll', () =>{

//   if (window.pageYOffset > 250){

//     document.body.style.backgroundColor= 'red';

//   }

//   else {
//     document.body.style.background ='aquamarine';
//   }
// });

//INPUT EVENT

// event trigger when click insight

// let x = document.getElementById("myinput");

// function myfocusfunction(){

//   x.style.backgroundColor ="yellow";
// };

// x.addEventListener('focus', myfocusfunction);

// event trigger when click outsight

// let y = document.getElementById("myinput");

// function myfocusfunction1(){

//   y.style.backgroundColor ="white";
// };

// y.addEventListener('blur', myfocusfunction1);

// GET VALUE FROM INPUT

// let pass = document.getElementById("pass");

// pass.addEventListener('change',  function(){

//   console.log(this.value);

// })

// COUNT EVERY CHANGES IN INPUTS TAGs AND ALSO YOU CAN STORE CHANGEs

// let pass = document.getElementById("pass");

// pass.addEventListener('input',  function(){

//   console.log(this.value);

// })

// INPORTANT TOPIC RELATED TO EVENT

// "EVENT BUBBLING"  & "EVENT CAPTURING"

// is hota kch youn hai agar humne 3 place par event lagaya hai 1. body 2. div  3. button

// to event bubbling me sb se pehle button wala event trigger hoga, phir div wala, phir and last me body wala

// lkn jb hum event capturing ki bat krty han to isme sb se pehle body wala trigger hoga, phir div wala, phir button wala.

//by default hum jo use krty han wo "EVENT BUBBLING" wala hota hai.

// lets see "EVENT BUBBLING"

// let mydiv = document.getElementById("mydiv");

// let btn = document.getElementById("btn");

// function btntrigger(){
//   console.log("button Event Trigger");
// }

// function divtrigger(){
//   console.log("div Event Trigger");
// }

// function bodytrigger(){
//   console.log("body Event Trigger");
// }

// btn.addEventListener('click', btntrigger);

// mydiv.addEventListener('click',  divtrigger);

// document.body.addEventListener('click',  bodytrigger);

//"EVENT CAPTURING" me pehle body ka event trigger hoga, phir div ka, phir last me button ka

// lets see "EVENT CAPTURING "

// let mydiv = document.getElementById("mydiv");

// let btn = document.getElementById("btn");

// function btntrigger(){
//   console.log("button Event Trigger");
// }

// function divtrigger(){
//   console.log("div Event Trigger");
// }

// function bodytrigger(){
//   console.log("body Event Trigger");
// }

// btn.addEventListener('click', btntrigger, true);   // <-- yahan true likhne se "EVENT CAPTURING" active ho jaye ga

// mydiv.addEventListener('click',  divtrigger, true); // <-- yahan true likhne se "EVENT CAPTURING" active ho jaye ga

// document.body.addEventListener('click',  bodytrigger,true);  // <-- yahan true likhne se "EVENT CAPTURING" active ho jaye ga

// AB HUM CHAHE TO APNI MARZI KA EVENT TRIGGER KRWA SKTY HAN, OR WO KESE HOGA YE DEKHTY HAN.

// COMBINATION OF "EVENT BUBBLING"  & "EVENT CAPTURING"

// lets see "EVENT BUBBLING"

// let mydiv = document.getElementById("mydiv");

// let btn = document.getElementById("btn");

// function btntrigger(){
//   console.log("button Event Trigger");
// }

// function divtrigger(){
//   console.log("div Event Trigger");
// }

// function bodytrigger(){
//   console.log("body Event Trigger");
// }

// btn.addEventListener('click', btntrigger, true);

// mydiv.addEventListener('click',  divtrigger);

// document.body.addEventListener('click',  bodytrigger,true);

// PREVENT DEFAULT

// prevent default me ye nature work ko rokta hai kisi bhi kam ko rokne k lia iska istemal hota hai

// let anchor = document.getElementById("anchor");

// anchor.addEventListener('click', function(e){

//       e.preventDefault();
// })

// OR

// let form = document.getElementById("myform");

// form.addEventListener('submit', function(e){

//   e.preventDefault();
// });

// BROWSER PBOJECT MODEL (BOM)

//  GLOBAL VARIABLE ONLY (VAR) ARE PROPERTY OF THE WINDOW OBJECT.

// GLOBAL FUNCTION ARE  METHOD OF THE WINDOW OBJECT.

// EXAMPLE

// var abc = "example"

//   console.log(window.abc);

//   let ab = "example";

//   console.log(window.ab);

// OR

// function xyz(){

//   console.log("print");

// }

//   window.xyz();

// hum isko bina window likhe bhi print kra skty han, q k window object default object browser object ka

// WINDOW

// ab hum yahan window object ki kch property dekhe ge.

// for inner window
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// for whole window including tabs
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// ANOTHER EXAMPLE

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");

// let url = "https://www.google.com";
// let features = "height =500 , width = 500";
// let win;

// btn1.addEventListener('click', function(){

// win = window.open (url, 'google', features);  // <-- window.open method me 3 parameter pass hoty han. 1st me url ata hai wo ap direct bhi daal skty ho or aik variable me bhi save kr k daal skty ho. 2nd me ap ko dena hai wo kch bhi ho skta hai , 3rd me uske feature batane han k usme kia kia features hone chahia.
// });

// btn2.addEventListener('click', function(){

// window.open('https://www.yahoo.com', 'google'); // <-- ab humne yahan google name dia hai to wo ussi window me yahoo open kr dega ussi features k sath agr google window open hoi to
// })

// btn3.addEventListener('click', function(){
// win.close()                               // <-- for window close
// })

// "TIME OUT" and "TIME INTERVAL"

// in ka istemal hum bht si jagapar kr skty han through condition

// SET TIME OUT

//  setTimeout(myfunction, 5000);   // < -- isme hum 2 parameter pass krty han 1st me function pass kraty han 2nd

// function myfunction(){
//     alert("please Subscribe");

// }

// IF YOU WANT CLEAR TIME OUT OUT

// let timeout =  setTimeout(myfunction, 5000);

//     function myfunction(){
//     alert("please Subscribe");

// }

// clearTimeout(timeout);

// SET INTERVEL

// setInterval(fun, 2000);

// function fun(){

//   console.log("my set interval function");
// }

// STOP SET INTERVAL USING BUTTON

// var t1 = setInterval(fun1, 2000);

// function fun1(){

//   console.log("my set interval function")
// };

// let btn1 = document.getElementById("btn");

// btn1.addEventListener('click', () =>{

//     clearInterval(t1);
// })

// LOCATION OBJECT

// location object apne pas current URL ki informtion rakhta hai.
// location boject aik propertty hai window object ki
// location object have own method and property also

// 1st we see properties of  location object

// using for url
// console.log(location.href);

// using for path name
// console.log(location.pathname);

// protocol used for ftp , http ,https , files
// console.log(location.protocol);

// console.log(location.hash);

// console.log(location.host);

// console.log(location.hostname);

// console.log(location.origin);

// console.log(location.port);

// console.log(location.search);

// 2nd we see method of  location object

// function fun(){

// location.assign("https://www.google.com")   // <-- ye direct link karega google se
// }

// function fun1(){

// location.replace("https://www.google.com")  // <-- ye bhi direct link karega google se lekn histoy me kch nhi rakhe ga
// }

// RELOAD WEB PAGE

// function fun(){

// location.reload();                // <-- isme hum web page ko reload kra rhe hsn button se lkn hum apni marzi se bhi reload kra skty han aik specific time k bad ka condition me use kr skty han
// }

// NAVIGATOR OBJECT

// navigator browser ki sari information rkhta hai.
// navigator me bhi property or method hoty han.

// THESE ARE  NAVIGATOR PROPERTIES

// console.log(navigator.appName);

// console.log(navigator.appVersion);

// console.log(navigator.appCodeName);

// console.log(navigator.cookieEnabled);   //  <-- important

// console.log(navigator.userAgent);

// console.log(navigator.platform);

// console.log(navigator.appCodeName);

// console.log(navigator.geolocation);

// console.log(navigator.onLine);

// console.log(navigator.product);

// THESE ARE  NAVIGATOR METHOD

// console.log(navigator.javaEnabled());

//  SCREEN OBJECT

// screen object user screen  ki information la kr daita hai.

// console.log(screen.width);

// console.log(screen.height);

// console.log(screen.colorDepth);

// console.log(screen.orientation);

// console.log(screen.availHeight);

// console.log(screen.availWidth);

// console.log(screen.pixelDepth);

// "DESTRUCTURING ARRAY" AND "DESTRUCTING OBJECT" AND "FUNCTION DESTRUCTURING"

// destructure ES6 me introduce karaya hai

// destructure sik jsvsscript expression hai jo possible banata hai array or object ki value ko unpack krne me

// ye extract krtaa hai data ko array or object se our is data ko dalta hai variables me at one time.

// ARRAY DESTRUCTUREING

// let myBioData = ['M', 'Riaz', '26'];

// let [myFName, myLName, myAge] = myBioData;    // <-- yahan humne  pora array ka data in variable me daal dia.

// console.log(myFName, " ",myLName, "My Age", myAge );

// NESTED ARRAY DESTRUCTUREING

// let book = ['Advance Js', 100, 150,

//             ['Riaz', 2021]
// ];

// let [name, page, price, [pesonalname, year] ] = book;

// console.log(page, pesonalname);

// CHANGE DESTRUCTURING VALUE IN ARRAY DESTRUCTUREING

// let book = ['Advance Js', 100, 150,

//             ['Riaz', 2021]
// ];

// let [name: fullname, page, price, [pesonalname, year] ] = book;       // <---- here we change property of Array.

// console.log(fullname, pesonalname);

// ab hum destructureing ki madad se 2 variable ki value ko swipe kre ge.

// let a =  10;
// let b = 200;

// [a,b] = [b,a];

// console.log(`this is ${a} value.  this is ${b} value `);

// =========================================

// OBJECT DESTRUCTUREING

// const myBioData = {

//       myFname : 'M',
//       myLname : 'Riaz',
//       myAge : '26'

// };

// let {myFname,myLname,myAge} = myBioData;

// console.log(myFname , myLname , myAge);

// NESTED OBJECT DESTRUCTUREING

// const myBioData = {

//       myFname : 'M',
//       myLname : 'Riaz',
//       myAge :  26,

//       myhob : {

//         sport:'cricket',
//         food: 'chinease'

// }

// };

// let {myFname,myLname,myAge, myhob} = myBioData;

// console.log( `My Name is ${myFname} my favourate food is  ${myhob.food}`);

// change destructuring value  in object Destructuring.

//   const myBioData = {

//     myFname : 'Muhammad',
//     myLname : 'Riaz',
//     myAge :  26,

//     myhob : {

//       sport:'cricket',
//       food: 'chinease'

// }

// };

// let {myFname: name,myLname,myAge, myhob} = myBioData;                // <---- here we change property of object

// console.log( `My Name is ${name} my favourate food is  ${myhob.food}`);

// ====================================================

// FUNCTION DESTRUCTURING

// function book(){

//   return ["Advance JS", 200];

// }
//   let [book_title, price] = book();

//   console.log(price);
//   console.log(book_title);


















// DEFAULT PARAMETER

// ES6  me default parameter me aik feature introduce karaya hai jis me agar hum argument nhi dena chahty to es6 me ye feature hai k hum parameter kay sath hi argument ko pass kara skty han

// function talk(msg = "hi"){

//   console.log(msg);
// };

// talk();











// REST PARAMETER

// REST PARAMETER FUNCTION  kay parameter  ko handle  krne ka best tareeqa hai.

// REST PARAMETER AIK ARRAY KI TARHAN KAM KRTA HAI.

// function sum(...args){

//     console.log(args)
// }

// sum(3,4,4,4,4);



// REST PARAMETER USING FOR LOOP

// function sum(...args){

//   let result= 0;

//   for(let i= 0; i < args.length ; i++){

//     result  += args[i];

// }
// console.log(result);
// }

// sum(3,5,9,7,1);










// SPREAD OPERATOR

// spread operator allow us to quickly copy all data or few part of daa of an existing array or object then into another array or object paste it

// let array1 = [1,2,3];

// let array2 = [4,5,6, ... array1];

// OR
// let array3 = [...array1, 7, 8, 9];

// OR

// let array4 = [1, 2, ... array1, 5, 6];

// OR

// let array5 = [...array1, ...array2, ...array3];

// console.log(array2);

// console.log(array3);

// console.log(array4);

// console.log(array5);







// "FOR OF" LOOP IN ES6

// ye for loop , array ya string ya koi bhi iterable object hai to usko asaan banane k lia aya tha.

// let score = [40,50, 60, 70 , 80 , 90];

// for (let x of score){

//   console.log(x);
// };









// ES6 "TEMPLETE LITERAL"

// Template literals provide an easy way to interpolate variables and expressions into strings.

// Template literals allow expressions in strings:

// Template literals allow variables in strings:

// let str  = `This
// is

// Riaz`;

// console.log(str);

// OR

// let str1 = "Riaz"

// console.log(`My Name Is ${str1}`);





// WE ALSO USED MATH E MATRICAL EXPRESION IN TEMPLETE LITERAL.

// let str1 = 40;

// console.log(`My Name Is ${str1*2/8}`);















// OOPs (OBJECT ORIENTED PROGRAMMING)

// OOPs  me hum kisi bhi same work ko repeat nhi krty. na hi bar bar code likhty ha.
// OOPs se pehle (DRY) "dont repeat your self" ka concept tha.

// OOPs CONCEPT ME HUM "OBJECT", "CLASS" AND "INHERITANCE" KA INSTEMAL KRTY HAN.

// SO IN OOP CONCEPT WE GROUP "FUNCTION" AND "VARIABLE" IN A BLOCK  CALLED CLASS.

// FOUR PILLAR OF OOPs.

// 1. ENCAPSOLATION   <--- wrapping "DATA" , "VARIABLES" , "FUNCTION" in single class

// 2. ABSTRACTION     <--- abstraction me hum aik program bana kr uski exe file daity han.

// 3. INHERITANCE     <---  Inheritance me hum aik class me dosri class ko use krty han inheritance krty han.

// 4. POLYMORPHISM    <--- Polymorphism me hum unique classes me same function ya object bana kr use krty han .

// CLASS AND OBJECT IN JS ES6

// so hum yahan class bana sekhy ge or us class  me "constructor method" kese banaty han or "prototype method" kese bnaty han or "static method" kese banaye ge te dekhy ge.





// made a class

//  class person{

// made a  constructor
// constructor(n, a){                      // <-- constructor  object se bhi call hota hai
// this.name = n;
// this.age = a;

// }

// made a prototype method


// sayhi(){                            // <-- "PROTOTYPE METHOD" object se bhi  call hota hai.

// console.log("Hi...");
// }




// made a static method

// static hello(){                   // <-- STATIC METHOD class se hi call hota hai ye object me copy nhi hota.
// console.log("Helloo ...")
// }




// made a static property

// static sproperty = "static property";       //  <--STATIC PROPERTY  bhi direct class se call hogi
//  }

//  let person1 = new person("Syed", 28);       // made an object which is person1, then put class in person1 object.

//  console.log(person1);        // <-- call "class" using with an object

//  person1.sayhi();              // <-- call "prototype method"

//  person.hello();  //      <-- call "static method".  yahan "static method" aik object se call nhi hoga isi lia hum isse direct class se call kraty han

// console.log(person.sproperty);      <-- CALL "static property" lkn yahan bhi static property ko call direct class se hi kariange

// INHERITANCE(wirasat) IN JS ES6

// class employee{    // <-- this is parent class

// constructor(n){
// this.name = n;

// }

// msg(){                                // <-- proto type method

// console.log("hi...");
// }

// }

//  class manager extends employee {  //<-- yahan hum class ko dosri class me use kr rhe han. manager wali class me employee wali class add ho gai hai                                  this is child class

// constructor(n, d){
// super(n)               // <-- yahan hum parent class k constructor ki property hasil kr rhe han ya import kr rhe han
// this.department = d;
// }

// // info(){

// super.msg();        // <-- yahan hum parent class k prototype method se pora method hi hasil kr rhe han ya import kr rhe han

// console.log(this.name + " is manager of department " + this.department)
// }

// }

// let manager1 = new manager("Syed Riaz", "web development"); // <-- yahan humne value add ki hai constructor me

// console.log(manager1);       // <-- yahan hum ne pori class ko console karaya hai

// console.log(manager1.info()); // <-- yahan hum ne manager class ki prototype method ko call kraya hai

// console.log(manager1.msg());   // <--yahan hum ne parent class which is employee k prototype method ko call kia hai manager wali class me import kra kr

//  "PUBLIC AND PRIVATE PROPERTY" IN CLASS

//  public property

//  class emp {

//   constructor(n){

//     this.name = n;

//   }
// getname(){

//   console.log(this.name);
// }

//  }

// let emp1 = emp(" Riaz ");

// console.log(emp1);

// private property

// class emp {
// #name = "";            // <-- before use a private property, its important to define or declare first

// constructor(n, v){

// this.#name = n;        //  <-- then this is a using method of private property
// this.value = v;
// }

// getname(){

// console.log(this.#name);  // <-- yahan hum aik method me private property ko call kare ge, ye private property bahar object se call nhi ho skti
// }

//  #getvalue(){             // <-- yahan humne aik private method banaya hai

// console.log(this.value);
//  }

//  primethod(){             // <-- or yahan humne private method which is "getvalue" ko call krne k lia aik public method banaya hai

// this.#getvalue();
//  }
// }
// let emp1 = new emp(" Riaz ", 54);

// console.log(emp1.getname());   // <-- yahan humne aik public method call kraya hai jis me aik private property hai

// console.log(emp1.primethod());  // <-- yahan humne aik or public method banaya hai jis me humne aik private method hai















//   MIXIN  "extra power for any class"

// mixin ye krta hai k agar hame object ki koi property ya method class me chahia to mixin add krta hai do cheezo ko.

// mixin banane k faida ye hai k hum isko bar baar add kr skry hai kahi bhi bina class ka istemal kia hoye.

// let usefullmethod = {

//     sayhi(){
//           console.log("SAy Hi...");
//     },

// saybye(){
//   console.log("SAy Bye...");
// }
// };

// class user {

// constructor(){

// this.name = "Riaz";
// }

// }

// Object.assign(user.prototype, usefullmethod);  // <-- yahan humne aik object ko class me add kia jisse hum mixin kehty han

// let user1 = new user();

// console.log(user1.sayhi());
// console.log(user1.saybye());

// Here Some Conduct Practice from me side

// let table = prompt("Enter Table Number");
// let table_Duration  = prompt("where you want to run Table");
// let t = Number(table_Duration);
// function myTable(num){

//   for(let i =1; i <=t; i++){

//     document.write(`${num} X ${i} = ${num*i} <br>`);
//   }
// }
// myTable(table);













// ===================================CALL BACK FUNCTION====================================

// Callback me hum function k under function define kr skty han.
// callback ko hum asynchronously bhi kam kara skty han.

// function greeting(name){
//     alert("Hello " + name);

// }
// function userprint(calback){

//     var name = prompt("please enter your name");
//     calback(name);
// }
// userinput(greeting);


// 2nd Example of call back

// const students = [
//     {name : "syed", subject : "Javascript" },
//     { name: "Riaz", subject : "python"}
// ];
// function enrollstudent(student, callback){

//     setTimeout( function(){
//         students.push(student);
//         console.log("student has been enrolled");
//         callback();
//     }, 5000);
// };

// function getStudent(){

//     setTimeout(() => {
//         let str ="";
//         students.forEach(function(studentfe){
//             str += `<li> ${studentfe.name} </li>`     })

//             document.getElementById("student").innerHTML = str;
//             console.log("student have been fetched");
//     }, 2000);
// }

// let newstudent = { name : "sunny", subject: "microbio"};
// enrollstudent(newstudent, getStudent);







// =======================================PROMISE================================

// promise bhi like condition ki tarhan kam krta han or hum isko callback ki jaga bhi use kr skty han.

// promise me 3 cheezain hoti hn 

// i. promise fulfilled
// ii. promise rejected
// iii. promise in pending


// function myFunc1(){

//     return new Promise( function(resolve, reject){
//         setTimeout( () => {
//             const error = true;
//             if(error){
//                 console.log("Function : Your Promise has not been resovled");
//                 resolve();
//             }   
//             else{
//                 console.log('Function: your promise has not been resolved');
//                 reject("Sorry not Fulfilled")
//             }   
//         }, 2000 );
//     })
// }

// myFunc1().then(function(){ console.log("Harry: Thanks for resoving")}).catch(function(error){ console.log("Harry: very bad bro. Reason : " + error)})



// Another Example of Promise Object



// const students = [
//     {name: "Ahmed", subject : "Math" },
//     {name : "Riaz", subject: "Javascript"}
// ];

// function enrollStudent(myStudent){
//     return new Promise(function(resolve, reject){

//         setTimeout(() => {
            
//             students.push(myStudent);
//             console.log("Student has been enrolled");

//             const error =false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         }, 1000);

//     })
// }

// function getStudent(){
//     setTimeout(() => {
       
//         let str = "";
//         students.forEach(function(stdnt){
//             str += `<li> ${stdnt.subject} </li>`;
//         });
//         document.getElementById('student').innerHTML = str;
//         console.log("Students have Been Fetched");

//     }, 5000);
// }

// let newStudent = { name : "farhan", subject: "python"};
// enrollStudent(newStudent).then(getStudent).catch(function(){
//     console.log("Some error occured" ) ;
// });

















// =============================================FETCH METHOD=================================================

// let myBtn = document.getElementById("myBtn");
// let content = document.getElementById("content");

// function getData(){

//     console.log("Started getData Function");

//     let url = "sampletext.text";

//         fetch(url).then( function(response){ 
//             console.log("inside first then");
//             return response.text();
//         }).then(function(data){

//             console.log("inside second then");
//             console.log(data);
//         })


//     }
// console.log("Before running getData function");
// getData();
// console.log("After running getData Function");




                                    // Antother Example of Fetch Method using "GET Method"

// myBtn.addEventListener('click',

// function getData(){

//     console.log("Started getData Function");

//     let url = "https://api.github.com/users";

//     fetch(url).then( function(response){ 
//         console.log("inside first then");
//         return response.json();
//         }).then(function(data){
            
//             console.log("inside second then");
//             console.log(datas);
//         }).catch( function(error){
//             console.log("This is an error  Riaz " + error)
//         } )
        
        
//     }
// )
//     console.log("Before running getData function");

//     getData();
// console.log("After running getData Function");






                                        // Now we See " POST Method" in Fetch Method


    // function postData(){
    //     url = "http://dummy.restapiexample.com/api/v1/create";
    //     data = '{"name":"riaz232cd","salary":"123","age":"23"}'
    //     params = {
    //         method:'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: data
    //     }
    //     fetch(url, params).then(response=> response.json())
    //     .then(data => console.log(data)
    //     )
    // }

    // postData()



