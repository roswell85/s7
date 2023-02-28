import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        LoginpageComponent
    ],
    exports: [
        LoginpageComponent
    ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    FontAwesomeModule
  ]
})
export class LoginpageModule { }
