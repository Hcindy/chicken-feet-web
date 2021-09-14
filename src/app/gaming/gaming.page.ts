import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ToastController } from "@ionic/angular"

@Component({
  selector: "app-gaming",
  templateUrl: "./gaming.page.html",
  styleUrls: ["./gaming.page.scss"],
})
export class GamingPage implements OnInit {
  bonusNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    // 用id获取本游戏的可用编号列表，用于显示出来被用户点击
    const gamingId = this.route.snapshot.paramMap.get("gamingId")
    console.log(gamingId)
  }

  async chooseBonusNumber(bonusNumber) {
    const toast = await this.toastController.create({
      message: "选择成功",
      duration: 2000
    })
    toast.present()
    this.router.navigate(["/hall"])
  }

}
