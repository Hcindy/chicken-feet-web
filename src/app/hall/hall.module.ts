import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { HallPageRoutingModule } from "./hall-routing.module"

import { HallPage } from "./hall.page"
import { NewgameComponent } from "./newgame/newgame.component"
import { OveredgameComponent } from "./overedgame/overedgame.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HallPageRoutingModule
  ],
  declarations: [
    HallPage,
    NewgameComponent,
    OveredgameComponent
  ]
})
export class HallPageModule { }
