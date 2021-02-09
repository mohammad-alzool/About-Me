'use strict';


let finalScore=0 ;
let userName = prompt ('welcome to my page what\`s you\`r name ?');

console.log('the name of the visitor user is ' + userName);

let myUsername = prompt ('my name is mohammad alzool ?', 'YES or NO' );

let myAge = prompt ('iam 30 years old ?', 'YES or NO');

let Degree = prompt ('did i study MIS ?', 'YES or NO');

let Exp = prompt ('i never worked before ?', 'YES or NO');

switch  (myUsername.toUpperCase()) {
    case 'YES' :
        case 'Y':
      console.log('my name is mohammad alzool ? = correct answer');
      alert('my name is mohammad alzool ? = correct answer');
      finalScore++
      break ;
    case  'NO':
        case 'N':
      console.log('my name is mohammad alzool ? = wrong answer');
      alert('my name is mohammad alzool ? = wrong answer');
      break;
      default:
        console.log('my name is mohammad alzool ? = wrong entry');
        alert('my name is mohammad alzool ? = wrong entry');
        break;
          }

switch  (myAge.toUpperCase()){
    case 'YES':
        case 'Y':
      console.log('iam 30 years old ? = correct answer');
      alert('iam 30 years old ? = correct answer');
      finalScore++
      break ;
    case 'NO':
        case 'N':
      console.log('iam 30 years old ? = wrong answer');
      alert('iam 30 years old ? = wrong answer');
      break;
      default:
  console.log('iam 30 years old ? = wrong entry');
  alert('iam 30 years old ? = wrong entry');
  break;
      }

switch  (Degree.toUpperCase()){
  case 'NO':
      case 'N':
    console.log('did i study MIS ? = correct answer');
    alert('did i study MIS ? = correct answer');
    finalScore++
    break ;
  case 'YES' :
      case 'Y':
    console.log('did i study MIS ? = wrong answer');
    alert('did i study MIS ? = wrong answer');
    break;
    default:
      console.log('did i study MIS ? = wrong entry');
      alert('did i study MIS ? = wrong entry');
      break;
        }

switch  (Exp.toUpperCase()){
  case 'YES':
      case 'Y':
    console.log('i never worked before ? =correct answer');
  alert('i never worked before ? =correct answer');
  finalScore++
    break ;
  case 'NO' :
      case 'N':
    console.log('i never worked before ? = wrong answer');
    alert('i never worked before ? = wrong answer');
    break;
    default:
      console.log('i never worked before ? = wrong entry');
      alert('i never worked before ? = wrong entry');
      break;
        }

let GuessesNumber = prompt ('guess a number', '1,2,3...999');
let attempts

for (let attempts=4;attempts>0;--attempts){
 
if (GuessesNumber ==127){
  alert('correct answer');
  attempts = 0
  finalScore++
  break;
}
if (attempts ==1){
  alert('You carried out your attempts , the correct answer was (127)');
}
else if (GuessesNumber <127){
  alert('too low');
  GuessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999');
}
else if (GuessesNumber >127){
  alert('too high');
  GuessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999');

}

else { 
  alert('wrong entry , please enter numbers only  ')
  GuessesNumber = prompt ('guess a number again you still have '+(attempts-1) +' attempts left', '1,2,3...999');
}


}


let moviesList=['Pirates of the Caribbean','Inception','Thor','Iron Man','X-Men','Limitless','Ex Machina','Avengers','The Hangover Part','Suicide Squad'];


      console.log(moviesList);
      let movieAttempts;
      let t;
      
        let myFev = prompt ('name on of my favorite movies');
      

        for (let t=5;t>0;--t){
 if (moviesList.includes(myFev)) {
   alert('true');
   finalScore++
   break;
 }else {
   myFev = prompt('you have '+(t)+' attempts left' );
 }
}
alert('thank you '+ userName + ' for visiting my web page');
alert('you`r score is '+finalScore+' of 7' );