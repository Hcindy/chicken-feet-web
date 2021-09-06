import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  { path: "", redirectTo: "hall", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomePageModule) },
  { path: "register", loadChildren: () => import("./register/register.module").then(m => m.RegisterPageModule) },
  { path: "hall", loadChildren: () => import("./hall/hall.module").then(m => m.HallPageModule) },
  { path: "waiting", loadChildren: () => import("./waiting/waiting.module").then(m => m.WaitingPageModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
