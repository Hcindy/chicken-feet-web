import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { WaitingPage } from "./waiting.page"

const routes: Routes = [
  {
    path: "",
    component: WaitingPage
  },
  {
    path: "game-participant",
    loadChildren: () => import("./game-participant/game-participant.module").then(m => m.GameParticipantPageModule)
  },
  {
    path: 'game-bonus',
    loadChildren: () => import('./game-bonus/game-bonus.module').then( m => m.GameBonusPageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingPageRoutingModule { }
