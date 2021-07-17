import Utils from "./utils";

export default class Splitter extends Utils {
  constructor(bill, tip, people) {
    super();
    this.bill = bill;
    this.tipAmount = tip;
    this.people = people;
  }

  handleValidation() {
    if (this.bill.trim() === "") {
      throw new Error("cannot be empty");
    }

    if (this.people.trim() === "") {
      throw new Error("cannot be empty");
    }
  }

  handleTip() {
    const percentage = (this.bill / 100) * this.tipAmount;

    return Splitter.formatValue(percentage / this.people);
  }

  handleTotal() {
    return Splitter.formatValue(this.handleTip() * this.people);
  }

  static formatValue(value) {
    return value.toLocaleString("en-US", {
      minimunFractionDigits: 3,
      maximumFractionDigits: 2,
    });
  }

  static displayTip(tip) {
    const element = document.getElementById("tip-amount-displayer");

    element.innerText = `$${tip}`;
  }

  static displayTotal(total) {
    const element = document.getElementById("total-amount-displayer");

    element.innerText = `$${total}`;
  }
}
