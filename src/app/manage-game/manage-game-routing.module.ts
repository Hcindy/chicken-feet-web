import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { ManageGamePage } from "./manage-game.page"

const routes: Routes = [
  {
    path: "",
    component: ManageGamePage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageGamePageRoutingModule {}
