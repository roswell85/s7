import { Component } from '@angular/core';
import {LogininfoService} from "../utils/logininfo.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(public _loginInfoSer:LogininfoService) {
  }
}
