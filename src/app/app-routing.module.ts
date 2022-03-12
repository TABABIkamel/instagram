import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicationComponent} from "./publication/publication.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {path:'publication',component:PublicationComponent},
  {path:'game',component:GameComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
