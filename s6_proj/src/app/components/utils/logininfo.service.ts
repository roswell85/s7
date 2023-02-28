import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogininfoService {


  isUserLoggedIn:boolean = false
  userName:string = 'guest'
  constructor() {

    this.lastVal = localStorage.getItem("LastValue")||'0'
  }

  lastVal:string = '0'
  store($event: any) {
    this.lastVal = $event
    localStorage.setItem("LastValue",$event)
  }
}
