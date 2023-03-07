import { Component } from '@angular/core';
import {LogininfoService} from "../../../components/utils/logininfo.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public _loginInfo:LogininfoService) {


  }

  items:Array<MenuItem> = [
    {label:'home',routerLink:'home'},
    {label:'contactus',routerLink:'contact'}
  ];

}
