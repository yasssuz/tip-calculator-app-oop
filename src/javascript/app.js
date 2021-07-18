import "../styles/index.css";
import Splitter from "./handleCalc";
import TipSelector from "./handleTip";

const form = document.forms.spliterForm;

form.addEventListener("submit", e => {
  e.preventDefault();

  const bill = form.bill.value;
  const tipAmount = TipSelector.getTipAmount();
  const people = form.people.value;
  const actionObj = new Splitter(bill, tipAmount, people);
  const tipObj = new TipSelector(tipAmount);

  actionObj.handleValidation();
  tipObj.validateTip();
  Splitter.displayTip(Splitter.formatValue(actionObj.handleTip()));
  Splitter.displayTotal(Splitter.formatValue(actionObj.handleTotal()));
});

document
  .querySelectorAll("#tips-list li")
  .forEach(tip => tip.addEventListener("click", TipSelector.selectTip));
