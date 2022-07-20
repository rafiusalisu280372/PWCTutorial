// Data Type
let Name=" Salisu "   // string
let age=50  // Number
let z=null     //Data Type Null
let y=undefined     //Data Type i s Undefined
let isMariage=true  //Data Type is boolean
console.log(age)
console.log(Name)
console.log(typeof y)
console.log(typeof isMariage)

let favColor=["white","Red","Yelloe","Cyan"]

// strings
let x='Hello world'
console.log(x.toUpperCase())
console.log(x.toLowerCase())
console.log(x.length)

//concatination using the plus operator
let m="I am" 
let n="I goto PWC Bootcamp " 
let p="I love to learn javascript"

console.log(m + Name + n + "and "  + p)

//concatination using the string literal
console.log(`${m} ${Name} ${m}  am here to learn Javascript `)

console.error('this is an error')
console.warn('This is a warning')

//Array methods
let fruits=['apple','banana', 'oranges']
fruits.push('grape')
fruits.push('strawberry')
fruits.pop()
console.log(fruits)

  //Add value
  fruits[4]='mangoes'



//Object Literals
const person = {
    firstName: 'Ekene', 
    age: 30, 
    height: 5.5,
    hobbies: ['music','Reading'],
    weight: 160,
    isMarried: true,
    greeting: function(){
        console.log("Hello World")
    }
}

//loops
for (let i=0; i<10; i++)
console.log(i)

for (let b=12; b<20; b++)
console.log(b)

  