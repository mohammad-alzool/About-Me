'use strict';


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
      break ;
    case  'NO':
        case 'N':
      console.log('my name is mohammad alzool ? = wrong answer');
      alert('my name is mohammad alzool ? = wrong answer');
      break;
      default:
        console.log('my name is mohammad alzool ? = wrong entry');
        break;
          }

switch  (myAge.toUpperCase()){
    case 'YES':
        case 'Y':
      console.log('iam 30 years old ? = correct answer');
      alert('iam 30 years old ? = correct answer');
      break ;
    case 'NO':
        case 'N':
      console.log('iam 30 years old ? = wrong answer');
      alert('iam 30 years old ? = wrong answer');
      break;
      default:
  console.log('iam 30 years old ? = wrong entry');
  break;
      }

    switch  (Degree.toUpperCase()){
        case 'YES':
            case 'Y':
          console.log('did i study MIS ? = correct answer');
          alert('did i study MIS ? = correct answer');
          break ;
        case 'NO' :
            case 'N':
          console.log('did i study MIS ? = wrong answer');
          alert('did i study MIS ? = wrong answer');
          break;
          default:
            console.log('did i study MIS ? = wrong entry');
            break;
              }

        switch  (Exp.toUpperCase()){
            case 'YES':
                case 'Y':
              console.log('i never worked before ? =correct answer');
            alert('i never worked before ? =correct answer');
              break ;
            case 'NO' :
                case 'N':
              console.log('i never worked before ? = wrong answer');
              alert('i never worked before ? = wrong answer');
              break;
              default:
                console.log('i never worked before ? = wrong entry');
                break;
                  }


                  alert('thank you '+ userName + ' for visiting my web page');