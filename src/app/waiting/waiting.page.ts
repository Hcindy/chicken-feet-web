import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import Game from "src/model/Game"
import EnterGame from "src/model/EnterGame"
import { WaitingService } from "./waiting.service"

@Component({
  selector: "app-waiting",
  templateUrl: "./waiting.page.html",
  styleUrls: ["./waiting.page.scss"]
})
export class WaitingPage implements OnInit, OnDestroy {
  tempTimeStamp = new Date().getTime() + 1000
  game: Game = {
    id: "123",
    name: "1",
    bonuses: [],
    startTime: this.tempTimeStamp,
    endTime: this.tempTimeStamp + 60000
  }
  enterGame: EnterGame = {
    disabled: true,
    checkInterval: null,
    countdown: -1,
    message: "即将开始"
  }

  constructor(private router: Router,
    private waitingService: WaitingService) { }

  ngOnInit() {
    this.refresh()
  }

  ngOnDestroy() {
    this.resetEnterGame()
  }

  private resetEnterGame() {
    clearInterval(this.enterGame.checkInterval)
    this.enterGame.checkInterval = null
  }

  refresh() {
    if (this.game.startTime == null) {
      this.enterGame.disabled = true
      this.resetEnterGame()
    } else {
      if (this.enterGame.checkInterval == null) {
        this.enterGame.checkInterval = window.setInterval(() => {
          this.enterGame.countdown -= 1

          if (this.enterGame.countdown < 0) {
            this.enterGame.disabled = false
            this.enterGame.message = "开始游戏"
            this.resetEnterGame()
          } else if (this.enterGame.countdown > 30) {
            this.enterGame.disabled = true
            this.enterGame.message = "即将开始"
          } else {
            this.enterGame.disabled = true
            this.enterGame.message = `倒计时 ${this.enterGame.countdown}S`
          }
        }, 1000)

        this.enterGame.countdown = Math.ceil((this.game.startTime - new Date().getTime()) / 1000)
      }
    }
  }

  exitGame() {
    this.router.navigate(["/hall"])
  }

  toGameParticipant() {
    this.router.navigate(["/waiting/game-participant"])
  }

  toGameBonus() {
    this.router.navigate(["/waiting/game-bonus"])
  }
}
