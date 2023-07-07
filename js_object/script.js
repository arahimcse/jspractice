const person = {
    firstName:"Abdur",
    lastName:"Rahim",
    age:50,
    eyeColor:"blue",
};

const x = person;
x.ff = 56;
console.log(x == person);