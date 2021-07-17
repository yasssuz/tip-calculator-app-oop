import "../styles/index.css";
import Splitter from "./handleCalc";
import TipSelector from "./handleTip";

const form = document.forms.spliterForm;

form.addEventListener("submit", e => {
  e.preventDefault();

  const bill = form.bill.value;
  const tipAmount = 5;
  const people = form.people.value;
  const calc = new Splitter(bill, tipAmount, people);

  try {
    calc.handleValidation();
    Splitter.displayTip(Splitter.formatValue(calc.handleTip()));
    Splitter.displayTotal(Splitter.formatValue(calc.handleTotal()));
  } catch (error) {
    console.log(error);
  }
});

document
  .querySelectorAll("#tips-list li")
  .forEach(tip => tip.addEventListener("click", TipSelector.selectTip));
