import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginpageComponent} from "./loginpage.component";

const routes: Routes = [
  {path:"signin",component:LoginpageComponent},
  {path:"**",redirectTo:'signin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
