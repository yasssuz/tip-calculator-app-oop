import Utils from "./utils";

export default class TipSelector extends Utils {
  static clearTips() {
    const tips = Utils.getAllQueries("#tips-list li");

    tips.forEach(tip => tip.classList.remove("selected-tip"));
  }

  static selectTip(e) {
    const tip = e.target;

    TipSelector.clearTips();
    tip.classList.add("selected-tip");
  }
}
