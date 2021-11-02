import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { ManageGamePageRoutingModule } from "./manage-game-routing.module"

import { ManageGamePage } from "./manage-game.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageGamePageRoutingModule
  ],
  declarations: [ManageGamePage]
})
export class ManageGamePageModule {}
