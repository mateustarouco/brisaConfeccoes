import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from "./page/page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path:'',
    component: PageComponent
  },{
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
