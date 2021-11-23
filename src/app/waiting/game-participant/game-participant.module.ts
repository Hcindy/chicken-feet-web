import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { GameParticipantPageRoutingModule } from "./game-participant-routing.module"

import { GameParticipantPage } from "./game-participant.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameParticipantPageRoutingModule
  ],
  declarations: [GameParticipantPage]
})
export class GameParticipantPageModule { }
