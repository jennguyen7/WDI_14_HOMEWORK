// Make an ATM Class

// For this exercise you will be creating an ATM class.

// It will have the following properties...

// type (e.g., "checking"), which should be determined by some input
// money, which should start out as 0
// It should have the following methods...

// withdraw, which should decrease the amount of money by some input
// deposit, which should increase the amount of money by some input
// showBalance, which should print the amount of money in the bank to the console.
// The Atm class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.

// Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.

class ATM {
	constructor(type, money) {
		this.type = type;
		this.money = 0;
		this._tracker = [];
	}
//setter- updating
//method for withdrawing
	withdraw(moneyVal) {
		this.money -= moneyVal;
		(this._tracker).push({"withdraw": moneyVal});
		return this.money
	}
//method for depositing
	deposit(moneyVal) {
		this.money += moneyVal;
		(this._tracker).push({"deposit": moneyVal});
	 	return this.money
	}

//getter - showing information
	get balance() {
		return this.money
	}

//getter for tracker
	get tracker() {
		return this._tracker
	}

	set tracker(newValue) {
	
	}

}

var jenAtm = new ATM('savings', 0);
console.log(jenAtm.deposit(10));
console.log(jenAtm.withdraw(3));
console.log(jenAtm.balance);
console.log(jenAtm.tracker);






