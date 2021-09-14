import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { IonicModule } from "@ionic/angular"

import { GamingPageRoutingModule } from "./gaming-routing.module"

import { GamingPage } from "./gaming.page"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamingPageRoutingModule
  ],
  declarations: [GamingPage]
})
export class GamingPageModule { }
