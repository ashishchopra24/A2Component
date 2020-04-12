import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

serverId = 100;
serverStatus = 'online';
value = false;
serverCreatedStatus = 'No server found';
  txt = 'Enter user name';
  serverName = 'First Server';

  constructor() {
    setTimeout(() => { this.value = true; }, 3000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreatedStatus = 'Server created';
  }



  cleartxt() {
    this.txt = '';
  }
}
