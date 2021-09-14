import { Component, OnInit } from "@angular/core"
import { WaitingService } from "../waiting.service"
import Statistic from "./Statistic"
import Bonus from "./Bonus"

@Component({
  selector: "app-game-bonus",
  templateUrl: "./game-bonus.page.html",
  styleUrls: ["./game-bonus.page.scss"],
})
export class GameBonusPage implements OnInit {
  statistic: Statistic = {
    nameTotal: "-",
    amountTotal: "-",
    worthTotal: "-",
  }

  bonuses: Array<Bonus> = [
    {name: "奖励一", amount: 2, worth: 20},
    {name: "奖励二", amount: 4, worth: 40},
    {name: "奖励三", amount: 5, worth: 50}
  ]

  constructor(private waitingService: WaitingService) { }

  ngOnInit() {
    this.statistic.nameTotal = this.bonuses.length
    this.statistic.worthTotal = 0
    this.statistic.amountTotal = 0

    for (const bouns of this.bonuses) {
      this.statistic.amountTotal += bouns.amount
      this.statistic.worthTotal += bouns.amount * bouns.worth
    }
  }

}
