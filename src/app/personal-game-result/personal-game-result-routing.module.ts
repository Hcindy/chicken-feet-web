import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { PersonalGameResultPage } from "./personal-game-result.page"

const routes: Routes = [
  {
    path: "",
    component: PersonalGameResultPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalGameResultPageRoutingModule {}
