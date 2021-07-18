import Utils from "./utils";

export default class Splitter extends Utils {
  constructor(bill, tip, people) {
    super();
    this.bill = Number(bill);
    this.tipAmount = Number(tip);
    this.people = Number(people);
  }

  handleValidation() {
    const billElement = Utils.getQuery("#bill-error-log");
    const billParent = billElement.parentElement.nextElementSibling;
    const peopleElement = Utils.getQuery("#people-error-log");
    const peopleParent = peopleElement.parentElement.nextElementSibling;
    let error = false;

    if (this.bill <= 0) {
      billParent.classList.add("border-red");
      billElement.textContent = "can't be 0 or less";
      error = true;
    } else {
      billParent.classList.remove("border-red");
      billElement.textContent = null;
    }

    if (this.people <= 0) {
      peopleParent.classList.add("border-red");
      peopleElement.textContent = "can't be 0 or less";
      error = true;
    } else {
      peopleParent.classList.remove("border-red");
      peopleElement.textContent = null;
    }

    if (error === true) {
      throw new Error("can't be 0 or less");
    }
  }

  handleTip() {
    const percentage = (this.bill / 100) * this.tipAmount;

    return percentage / this.people;
  }

  handleTotal() {
    return this.bill / this.people + this.handleTip();
  }

  static formatValue(value) {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  }

  static displayTip(tip) {
    const element = Utils.getQuery("#tip-amount-displayer");

    element.innerText = `$${tip}`;
  }

  static displayTotal(total) {
    const element = Utils.getQuery("#total-amount-displayer");

    element.innerText = `$${total}`;
  }
}
