class vehicle{
    constructor(brand) {
        this.brand= brand;
    }
    start(){
        console.log(`${this.brand} is best brand`)
    }
}

class Car extends vehicle {
    constructor(brand,model){
        super(brand);
        this.model= model
    }
    drive(){
        console.log(`${this.brand} ${this.model} is running.`)
    }
    
}


const car1 = new Car("BMW","X5");

car1.drive();
car1.start();


/*
class Vehicle {
    start() {
        console.log("Vehicle is starting");
    }
}

class Car extends Vehicle {
    start() {
        super.start();
        console.log("Car is starting");
    }
}

const car1 = new Car();

car1.start();
*/

class animal{
    speak(){
        console.log("Animals makes a sound")
    }
}
class dogs extends animal{
    speak(){
        super.speak();
        console.log("Dog barks")
    }
}

const dog1 = new dogs();
dog1.speak();