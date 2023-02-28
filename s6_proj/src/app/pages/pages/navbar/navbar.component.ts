import { Component } from '@angular/core';
import {MenuItem,PrimeIcons} from "primeng/api";
import {MenubarModule} from 'primeng/menubar';
import {LogininfoService} from "../../../components/utils/logininfo.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public _loginInfo:LogininfoService) {


  }

  items:Array<MenuItem> = [
    {label:'home',routerLink:'pages'}
    ];


}
