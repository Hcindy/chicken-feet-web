import { Component, OnInit } from "@angular/core"
import Game from "src/model/Game"
import appConst from "../app.const"

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.page.html",
  styleUrls: ["./new-game.page.scss"],
})
export class NewGamePage implements OnInit {
  readonly usernameReg: string = appConst.usernameReg

  game: Game = {
    id: "",
    name: "",
    bonuses: [],
    startTime: null,
    endTime: null,
  }

  constructor() { }

  ngOnInit() {
    this.game.startTime = new Date().getTime() + 180000 // 预设3分钟开始
    this.game.endTime = this.game.startTime + 600000 // 预设开始后10分钟结束
  }

  submit() {
  }
}
