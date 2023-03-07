import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'error',loadChildren:()=>import("./errorpage/errorpage.module").then(m=>m.ErrorpageModule)},
  {path:'contact',component:ContactComponent},
  {path:'',component:PagesComponent},
  {path:"**",redirectTo:'error'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
