import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

serverId = 10;
serverStatus = 'Online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red' ;
  }


}
