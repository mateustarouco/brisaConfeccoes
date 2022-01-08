import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from "./page/page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CamisetasComponent} from "./page/camisetas/camisetas.component";
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },{
    path:'',
    component: HomeComponent
  },{
    path:'camisetas',
    component: CamisetasComponent
  },
  {
    path:'404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
