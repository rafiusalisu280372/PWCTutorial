const studentScore=[80,90,70,60,50];

const studentsNames = ['oluwakemi','James','Okiroro','Timilehin','Oluwafemi'];

const studentActivities = [
    {
        id: 1,
        description: 'Having the induction session',
        isDone: true,

    },
    {
        id: 2,
        description: 'Starting the Javascript, HTML, CSS, React class',
        isDone: false,
    },
    {
        id: 3,
        description: 'Starting the C# .NET classes',
        isDone: false,
    },
    

];


const customerAccountInfo = [
    {
        id: 1,
        accountNumber:"1234567890",
        fullName: 'Salisu Rafiu Ademuyiwa',
        address: '12 Sule Abore  St Berger',
        canDebit: true,

    },
    {
        id: 2,
        accountNumber:"0987654322",
        fullName: 'James Shobande',
        address: '12 Lawanson Joe  St Ikeja',
        canDebit: false,
    },
    {
        id: 3,
        accountNumber:"543216789",
        fullName: 'Salisu Rafiu Ademuyiwa',
        address: '12 Sule Abore  St Berger',
        canDebit: true,
    },
     

];

// const customerAccountInfoID=customerAccountInfo.map(function (custInfo)) {
//     return custInfo.id
// };

// const customerAccountInfoaccountNumber=customerAccountInfo.map(function (custInfo)) {
//     return custInfo.accountNumber
// };


// const customerAccountInfofullName=customerAccountInfo.map(function (custInfo)) {
//     return custInfo.fullName
// };


// const customerAccount=customerAccountInfo.map(function (custInfo)) {
//     return custInfo.address
// };

console.log(studentScore[0]);
console.log(studentScore[3]);
console.log(studentsNames[2]);
console.log(studentActivities[2].description);
console.log(studentActivities[1].isDone);


// const studentActivitiesDescription = studentActivities.map(
//     (activity) => activity.description
// );

// const customerAccountFullname = studentActivities.map(
//    // (activity) => activity.description
//    return instanceof.id
// );


// filter 
const studentActivitiesDone =studentActivities.filter(
    (activity) => activity.isDone
);

//console.log(studentActivitiesDone);
console.log