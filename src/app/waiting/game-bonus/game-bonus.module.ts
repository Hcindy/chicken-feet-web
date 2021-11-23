import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { GameBonusPageRoutingModule } from "./game-bonus-routing.module"

import { GameBonusPage } from "./game-bonus.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameBonusPageRoutingModule
  ],
  declarations: [GameBonusPage]
})
export class GameBonusPageModule { }
