import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import Account from "./Account"

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  account: Account = {
    username: ""
  }

  readonly usernameReg: string = "^[A-Za-z0-9\u4e00-\u9fa5]{1,8}$"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(["/hall"])
  }
}
