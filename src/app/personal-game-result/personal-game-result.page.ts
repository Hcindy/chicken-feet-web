import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-personal-game-result",
  templateUrl: "./personal-game-result.page.html",
  styleUrls: ["./personal-game-result.page.scss"],
})
export class PersonalGameResultPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refresh() {
    // todo 如果全部公开的情况下，就不请求后端了
  }
}
