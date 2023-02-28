import { Component } from '@angular/core';
import {faLock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  faLock = faLock
}
