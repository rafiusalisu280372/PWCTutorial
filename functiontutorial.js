// function addNum(a,b)
// {
// return a+b    
// }


//     function divideNum(a,b){
//         return a/b    
//     }
    
//     function subtractNum(a,b){
//         return a-b    
//     }

//     function multiplyNum(a,b){
//         return a*b    
//     }

// console.log(addNum(7,8))


// const  addNum =(a,b) => a+b ;
// const  subtractNum =(a,b) => a-b;
// const  multiplyNum =(a,b) => a*b;
// const  sqrNum =(a) => a*a ;
// const  numMod=(a) => a%2;
// console.log(addNum(2,5))
// console.log(subtractNum(5,2))
// console.log(sqrNum(5))
// console.log(numMod(2))




//loops
// for (let i=2; i<20; i+=2)
// console.log(i)

// for (let i=2; i<20; i+=3)
// console.log(i)


// let someword='AdamSalisu'
// console.log(someword.split())

// let somearray=['a','b','c','d']
// console.log(somearray.reverse())

// function stringToArray(s)
// {
//      return s.split("").reverse().join(""))
// }
// console.log(stringToArray("Salisu"))


// function isPalindrome(str)
// {
//         let newStr=str.split("").reverse().join("")
//             if(str===newStr){
//                 return true
//             } else{
//                 return false
//             }
            
// }
// console.log(isPalindrome("fire"))


// let str15="15"
  
//  console.log(parseInt(str15))


 //interger as an input and check wether is a Palindrome 
 function intPalindrome(num)
 {
     let numToStr=num.toString()
     let newStr=numToStr.split('').reverse().join('')
     let backToInt=parseInt(newStr)
     if (backToInt===backToInt)
     { return true
     }else{
         return false
     }
    }

 console.log(intPalindrome(3003))

