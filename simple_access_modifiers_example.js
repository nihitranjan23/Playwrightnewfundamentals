"use strict";
class BankAccount {
    accountHolder; // Everyone can see
    balance; // Only BankAccount class knows
    accountType; // BankAccount + child classes know
    constructor(holder, initialBalance, type) {
        this.accountHolder = holder;
        this.balance = initialBalance;
        this.accountType = type;
    }
    generateStatement() {
        return "Statement for: " + this.accountHolder;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Deposited: $" + amount);
        console.log(this.generateStatement()); // Can call private inside class
    }
    getBalance() {
        return this.balance;
    }
    showInfo() {
        console.log("Holder: " + this.accountHolder);
        console.log("Type: " + this.accountType);
        console.log("Balance: $" + this.balance);
    }
}
class SavingsAccount extends BankAccount {
    constructor(holder, balance) {
        super(holder, balance, "Savings");
    }
    addInterest() {
        console.log("Adding interest to " + this.accountType); // Can use protected
        console.log("Account holder: " + this.accountHolder); // Can use public
        // console.log(this.balance);    // ERROR! Cannot access private from child
    }
}
// === Using the classes ===
let myAccount = new BankAccount("John", 1000, "Checking");
// public - accessible everywhere
console.log("Account Holder: " + myAccount.accountHolder);
// private - ONLY inside the class
// console.log(myAccount.balance);         // ERROR!
// myAccount.generateStatement();          // ERROR!
// Using public methods to work with private data
myAccount.deposit(500);
console.log("Current Balance: $" + myAccount.getBalance());
// protected - accessible in child class, NOT outside
// console.log(myAccount.accountType);     // ERROR!
console.log("\n--- Savings Account ---");
let savings = new SavingsAccount("John", 2000);
savings.addInterest();
savings.showInfo();
