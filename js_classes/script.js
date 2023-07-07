class Practice{

    constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const obj = new Practice("Abdur Rahim", 50);

document.getElementById("demo").innerHTML = "I am " + obj.name + " is " + obj.age;