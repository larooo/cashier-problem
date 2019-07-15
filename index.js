class Change {
  constructor(price, takenMoney) {
    this.price = price;
    this.takenMoney = takenMoney;
  }

  resMoneyArr() {
    const money = [100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let rest = this.takenMoney - this.price;
    let resMoneyArr = money.filter(x => x <= rest);
    let newArr = [];

    for (let i = 0; i <= resMoneyArr.length - 1; i++) {
      let times = rest / resMoneyArr[i];
      let firstDigit = parseInt(times.toString()[0]);
      for (let j = firstDigit; j > 0; j--) {
        newArr.push(resMoneyArr[i]);
      }
      rest = rest % resMoneyArr[i];
    }

    return newArr;
  }
}

let test = new Change(3.75, 50);

console.table(test.resMoneyArr());
