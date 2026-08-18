// Encapsulation means bundling data and methods together and restricting direct access to the internal data.

class BankAccount {
    #balance
    constructor (balance){
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        this.#balance -= amount;
    }
    
    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(700);

console.log(account.getBalance());