'use strict';


let finalScore=0 ;
let userName = prompt ('welcome to my page what`s you`r name ?');
let myUsername = prompt ('my name is mohammad alzool ?', 'YES or NO' );
let myAge = prompt ('iam 30 years old ?', 'YES or NO');
let Degree = prompt ('did i study MIS ?', 'YES or NO');
let Exp = prompt ('i never worked before ?', 'YES or NO');

function testUsername(){
  switch (myUsername.toUpperCase()) {
  case 'YES' :
  case 'Y':
    alert('my name is mohammad alzool ? = correct answer');
    finalScore++ ;
    break ;
  case 'NO':
  case 'N':
    alert('my name is mohammad alzool ? = wrong answer');
    break;
  default:
    alert('my name is mohammad alzool ? = wrong entry');
    break; }}
testUsername();

function userAge(){
  switch (myAge.toUpperCase()){
  case 'YES':
  case 'Y':
    alert('iam 30 years old ? = correct answer');
    finalScore++ ;
    break ;
  case 'NO':
  case 'N':
    alert('iam 30 years old ? = wrong answer');
    break;
  default:
    alert('iam 30 years old ? = wrong entry');
    break;
  }}
userAge();

function userDegree() {
  switch (Degree.toUpperCase()){
  case 'NO':
  case 'N':
    alert('did i study MIS ? = correct answer');
    finalScore++ ;
    break ;
  case 'YES' :
  case 'Y':
    alert('did i study MIS ? = wrong answer');
    break;
  default:
    alert('did i study MIS ? = wrong entry');
    break;
  }}
userDegree();

function expo (){
  switch (Exp.toUpperCase()){
  case 'NO' :
  case 'N':
    alert('i never worked before ? =correct answer');
    finalScore++ ;
    break ;
  case 'YES':
  case 'Y':
    alert('i never worked before ? = wrong answer');
    break;
  default:
    alert('i never worked before ? = wrong entry');
    break;
  }}
expo();

let guessesNumber = prompt ('guess a number', '1,2,3...999');
let attempts ;

for (attempts=4;attempts>0;--attempts){
  if (guessesNumber ==='127'){
    alert('correct answer');
    finalScore++;
    attempts=0;
  }
  else if (attempts ===1){
    alert('You carried out your attempts , the correct answer was (127)');
    attempts=0;
  }
  else if (guessesNumber <127){
    alert('too low');
    guessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999');
  }
  else if (guessesNumber >127){
    alert('too high');
    guessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999'); }
  else {
    alert('wrong entry , please enter numbers only  ');
    guessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999');
  }}
let moviesList=['Pirates of the Caribbean', 'Inception', 'Thor', 'Iron Man', 'X-Men', 'Limitless', 'Ex Machina', 'Avengers', 'The Hangover Part', 'Suicide Squad'];
let myFev = prompt ('name on of my favorite movies');
let t;
for (t=5;t>0;--t){
  if (moviesList.includes(myFev)){
    alert('true');
    finalScore++ ;
    break;
  }else {
    myFev = prompt('you have '+(t)+' attempts left' );
  }
}
if (t===0) {
  alert('this is my favorite movies list  (Pirates of the Caribbean, Inception, Thor, Iron Man, X-Men, Limitless, Ex Machina, Avengers, The Hangover Part Suicide Squad)');
}
alert('thank you '+ userName + ' for visiting my web page');
alert('you`r score is '+finalScore+' of 7' );
