import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import Account from "src/model/Account"
import appConst from "../app.const"

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  readonly usernameReg: string = appConst.usernameReg

  account: Account = {
    username: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(["/hall"])
  }
}
