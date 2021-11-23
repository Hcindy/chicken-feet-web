import { Component, OnInit } from "@angular/core"
import Game from "src/model/Game"
import Statistic from "src/model/Statistic"
import appConst from "src/app/app.const"

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.page.html",
  styleUrls: ["./new-game.page.scss"],
})
export class NewGamePage implements OnInit {
  readonly gameNameReg: string = appConst.gameNameReg
  readonly bonuseNameReg: string = appConst.bonuseNameReg
  readonly bonuseAmountReg: string = appConst.bonuseAmountReg
  readonly bonuseWorthReg: string = appConst.bonuseWorthReg

  loading = false

  game: Game = {
    id: "",
    name: "",
    bonuses: [],
    startTime: null,
    endTime: null,
  }

  // TODO 界面呈现以及onIonChange里更新
  statistic: Statistic = {
    nameTotal: "-",
    amountTotal: "-",
    worthTotal: "-",
  }

  constructor() {}

  ngOnInit() {
    this.game.startTime = new Date().getTime() + 180000 // 预设3分钟开始
    this.game.endTime = this.game.startTime + 600000 // 预设开始后10分钟结束
    this.addNullItem()
  }

  getIsoStartTime() {
    return new Date(this.game.startTime).toISOString()
  }

  getIsoEndTime() {
    return new Date(this.game.endTime).toISOString()
  }

  onStartTimeChange(v) {
    this.game.startTime = new Date(v).getTime()
  }

  onEndTimeChange(v) {
    this.game.endTime = new Date(v).getTime()
  }

  addNullItem() {
    this.game.bonuses.push({ name: null, amount: null, worth: null })
  }

  onIonChange(index: number) {
    if (index === this.game.bonuses.length - 1) {
      const lastItem = this.game.bonuses[index]
      if (
        null != lastItem.name ||
        null != lastItem.amount ||
        null != lastItem.worth
      ) {
        this.addNullItem()
      }
    } else if (index === this.game.bonuses.length - 2) {
      const secondLastItem = this.game.bonuses[index]
      if (
        ("" === secondLastItem.name || null == secondLastItem.name) &&
        ("" === `${secondLastItem.amount}` || null == secondLastItem.amount) &&
        ("" === `${secondLastItem.worth}` || null == secondLastItem.worth)
      ) {
        this.game.bonuses.pop()
      }
    }
  }

  checkInvalidate(regExp: RegExp, value: any): boolean {
    return !regExp.test(value)
  }

  submit() {
    this.loading = true
    if (this.checkInvalidate(new RegExp(this.gameNameReg), this.game.name)) {
      this.loading = false
      return
    }
    const bnreg = new RegExp(this.bonuseNameReg)
    const bareg = new RegExp(this.bonuseAmountReg)
    const bwreg = new RegExp(this.bonuseWorthReg)
    const length = this.game.bonuses.length - 2
    for (let i = 0; i < length; i++) {
      if (this.checkInvalidate(bnreg, this.game.bonuses[i].name)) {
        this.loading = false
        return
      }
      if (this.checkInvalidate(bareg, this.game.bonuses[i].amount)) {
        this.loading = false
        return
      }
      if (this.checkInvalidate(bwreg, this.game.bonuses[i].worth)) {
        this.loading = false
        return
      }
    }
    if (this.game.startTime > this.game.endTime) {
      this.loading = false
      return
    }
    const now = new Date().getTime()
    if (this.game.startTime < now) {
      this.loading = false
      return
    }
    console.log(this.game)
  }
}
