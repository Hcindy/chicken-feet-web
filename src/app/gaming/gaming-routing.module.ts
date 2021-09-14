import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { GamingPage } from "./gaming.page"

const routes: Routes = [
  {
    path: "",
    component: GamingPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamingPageRoutingModule {}
