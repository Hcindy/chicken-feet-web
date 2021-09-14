import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-overedgame",
  templateUrl: "./overedgame.component.html",
  styleUrls: ["../hall.page.scss", "./overedgame.component.scss"],
})
export class OveredgameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  checkGameResult() {
    this.router.navigate(["/personal-game-result"])
  }
}
