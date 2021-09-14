import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-newgame",
  templateUrl: "./newgame.component.html",
  styleUrls: ["../hall.page.scss", "./newgame.component.scss"],
})
export class NewgameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  joinGame() {
    this.router.navigate(["/waiting"])
  }
}
