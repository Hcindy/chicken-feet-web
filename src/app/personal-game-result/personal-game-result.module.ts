import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { PersonalGameResultPageRoutingModule } from "./personal-game-result-routing.module"

import { PersonalGameResultPage } from "./personal-game-result.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalGameResultPageRoutingModule
  ],
  declarations: [PersonalGameResultPage]
})
export class PersonalGameResultPageModule {}
