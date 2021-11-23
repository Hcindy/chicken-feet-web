import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { GameBonusPage } from "./game-bonus.page"

const routes: Routes = [
  {
    path: "",
    component: GameBonusPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameBonusPageRoutingModule { }
