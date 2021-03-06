/* eslint-disable max-len */
import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  { path: "", redirectTo: "new-game", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomePageModule) },
  { path: "register", loadChildren: () => import("./register/register.module").then(m => m.RegisterPageModule) },
  { path: "hall", loadChildren: () => import("./hall/hall.module").then(m => m.HallPageModule) },
  { path: "waiting", loadChildren: () => import("./waiting/waiting.module").then(m => m.WaitingPageModule) },
  { path: "gaming/:gamingId", loadChildren: () => import("./gaming/gaming.module").then(m => m.GamingPageModule) },
  { path: "personal-game-result", loadChildren: () => import("./personal-game-result/personal-game-result.module").then(m => m.PersonalGameResultPageModule) },
  { path: "manage-game", loadChildren: () => import("./manage-game/manage-game.module").then(m => m.ManageGamePageModule) },
  { path: "new-game", loadChildren: () => import("./new-game/new-game.module").then(m => m.NewGamePageModule) }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
