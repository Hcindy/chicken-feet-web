import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { GameParticipantPage } from "./game-participant.page"

const routes: Routes = [
  {
    path: "",
    component: GameParticipantPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameParticipantPageRoutingModule { }
