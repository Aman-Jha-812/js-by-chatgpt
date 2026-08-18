class Animal {
    speak(){
        console.log("Animal sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Bark");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Meow");
    }
}

const animals =[
    new Dog(),
    new Cat(),
    new Animal()
];

animals.forEach(animal=>{
    animal.speak();
})

// Polymorphism allows the same method or interface to have different implementations or behaviors depending on the object.

class shape{
    area(){

    }
}
class Circle extends shape{
    constructor(radius){
        super()
        this.radius= radius;
        console.log(Math.PI * radius *radius)
    }
}
class Rectangle extends shape {
    constructor(length, width){
        super()
        this.length=length;
        this.width=width;
        console.log(length*width)
    }
}

const shapes =[
    new Circle(2),
    new Rectangle(4,5)
];
shapes.forEach(shape=>{
    shape.area();
})