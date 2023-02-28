import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import("./pages/loginpage/loginpage.module").then(m=>m.LoginpageModule)},
  {path:"pages",loadChildren:()=>import("./pages/pages/pages.module").then(m => m.PagesModule)},
  {path:"**",redirectTo:"pages"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
