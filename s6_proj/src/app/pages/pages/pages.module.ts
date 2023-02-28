import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MenubarModule,
        MenuModule,
        ButtonModule
    ]
})
export class PagesModule { }
