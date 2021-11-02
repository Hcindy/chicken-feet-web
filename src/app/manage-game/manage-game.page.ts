import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import Game from "../../model/Game"

@Component({
  selector: "app-manage-game",
  templateUrl: "./manage-game.page.html",
  styleUrls: ["./manage-game.page.scss"],
})
export class ManageGamePage implements OnInit {
  games: Array<Game> = [{ id: "1", name: "1", bonuses: [] },
  { id: "2", name: "2", bonuses: [] },
  { id: "3", name: "3", bonuses: [] },
  { id: "4", name: "4", bonuses: [] },
  { id: "5", name: "5", bonuses: [] },
  { id: "6", name: "6", bonuses: [] }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewGame() {
    this.router.navigate(["/new-game"])
  }

}
