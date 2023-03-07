import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideComponentDirective } from './components/utils/hide-component.directive';
import {UtilsModule} from "./components/utils/utils.module";
import {FormsModule} from "@angular/forms";
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LoginpageModule} from "./pages/loginpage/loginpage.module";
import {PagesModule} from "./pages/pages/pages.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {MenuItem,PrimeIcons} from "primeng/api";
import {MenubarModule} from 'primeng/menubar';
import { NavComponent } from './pages/pages/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    LoginpageModule,
    BrowserAnimationsModule,
    PagesModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
