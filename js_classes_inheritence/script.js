class Car{
    constructor(brand)
    {
        this.model = brand;
    }
     
    present()
    {
        return this.model;
    }
}

class Model extends Car{
    constructor(mode, year)
    {
        super(mode);
        this.year = year;
    }

    show()
    {
        return this.present() + " " + this.year;
    }
}

const car1 = new Model("BMW", 2014);

document.getElementById("demo").innerHTML = car1.show();



// JavaScript static method can call only by "class name" e.g Car.hello(). Here hello() is a static method. 