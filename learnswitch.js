
// const color= "red"
// switch (color){
//     case "red":
//         console.log('color is red')
//     break
//         case "blue":
//             console.log('color is blue')
//     break
//     case "Yellow":
//         console.log('color is Yellow')
//     break

// }



// if (score>=70){
//     console.log('Distinction') 
//     } else if (score>=60 && score<70){
//      console.log('Very good') 
//     } else if (score>=50 && score<60){
//     console.log('Good') 
//     } else if (score>=40 && score<50){
//      console.log('Pass') }
//      else {
//         console.log('fail') 
//      }

const score = 30

switch (true){

        case score>=70:
            console.log('Distinction')
        break;

        case ((score>=60) && (score<70)):
            console.log('Very Good')
        break;
        
        case ((score>=50) && (score<60)):
            console.log('Good')
        break;
       
        case ((score>=40) && (score<50)):
            console.log('pass')
        break;
            case ((score>=30) && (score<40)):
            console.log('Pass')
        break;
        
        case ((score<=30) && (score<40)):
            console.log('Pass')
        break;

        default:
            console.log('failed')
        break;
}