import Utils from "./utils";

export default class TipSelector extends Utils {
  constructor(tip) {
    super();
    this.tip = tip;
  }

  validateTip() {
    const errLog = Utils.getQuery("#tip-error-log");

    if (Number.isNaN(this.tip)) {
      errLog.textContent = "select a tip";
      throw new Error("select a tip first");
    }

    errLog.textContent = "";
  }

  static clearTips() {
    const tips = Utils.getAllQueries("#tips-list li");

    tips.forEach(tip => {
      tip.classList.remove("selected-tip");
    });
  }

  static selectTip(e) {
    const tip = e.target;

    TipSelector.clearTips();

    if (tip.id === "custom-tip") {
      tip.parentElement.classList.add("selected-tip");
      return;
    }

    tip.classList.add("selected-tip");
  }

  static getTipAmount() {
    const tips = Utils.getAllQueries("#tips-list li");
    let tipAmount;

    tips.forEach(tip => {
      if (
        tip.classList.contains("selected-tip") &&
        tip.id === "li-with-input"
      ) {
        tipAmount = tip.children[0].value;
        return;
      }

      if (tip.classList.contains("selected-tip")) {
        tipAmount = tip.children[0].textContent;
        tipAmount = tipAmount.replace(/%/, "");
      }
    });

    return Number(tipAmount);
  }
}
