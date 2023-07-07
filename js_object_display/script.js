const person = {
firstName:"Abdur",
lastName:"Rahim",
age:50,
eyeColor:"Blue"
}

// document.getElementById("demo").innerHTML = person.firstName;
// document.getElementById("demo").innerHTML = Object.values(person); //Object.values() convert and object to array
// document.getElementById("demo").innerHTML = 

const bt = JSON.parse(person); 

console.log(bt);