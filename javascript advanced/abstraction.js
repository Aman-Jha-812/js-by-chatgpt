class CoffeeMachine {
    #boilWater() {
        console.log("Boiling water...");
    }

    makeCoffee() {
        this.#boilWater();
        console.log("Coffee ready!");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();