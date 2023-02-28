import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [

  {path:'home',component:PagesComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'error',loadChildren:()=>import("./errorpage/errorpage.module").then(m=>m.ErrorpageModule)},

  {path:"**",redirectTo:'error'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
