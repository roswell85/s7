import { Component } from '@angular/core';
import {LogininfoService} from "./components/utils/logininfo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's6_proj';
  hide: boolean = false;
  OrderValue: any = 0;

  constructor(public _loginInfo:LogininfoService) {


  }

  handleInputChange($event: any) {
    this.OrderValue = $event
    this._loginInfo.store($event)
  }
}
