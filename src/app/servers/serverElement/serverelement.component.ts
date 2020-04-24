import {Component, Input, OnInit} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverselement.component.html'
})
export class ServerElementComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';
  @Input() srvnName = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }



}
