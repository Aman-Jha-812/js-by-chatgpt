class student{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    introduce(){
        console.log(`My name is ${this.name}`)
    }
}
class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting`)
    }
}

const car1 = new car("Toyota","corolla");
const car2 = new car("BMW","X5");

car1.start();
car2.start();