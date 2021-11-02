import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-hall",
  templateUrl: "./hall.page.html",
  styleUrls: ["./hall.page.scss"],
})
export class HallPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(["/home"])
  }

  refresh() {

  }

  joinGame() {
    this.router.navigate(["/waiting"])
  }

  segmentChanged(event) {
    console.log(event)
  }
}
