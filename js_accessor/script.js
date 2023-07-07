/**
 * JavaScript getter and setter function set and return data in a object as a properties instead of method
 */

const person ={
    firstName:"Abdur",
    lastName:"Rahim",
    language:"NO",
    set lang([value1, value2]) //This is the ES5 setter method that will set the values for language properties
    {
        this.language = value1;
        this.lastName = value2;
    },
    get lang()
    {
        return this.lastName + " " + this.language;
    }
}

console.log(person);
// Set an object property using a setter:
person.lang = ['en', 'Karim'];
document.getElementById("demo").innerHTML =person.firstName + " " + person.lang;