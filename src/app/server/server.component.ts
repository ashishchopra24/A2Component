import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

serverCreated = false;
  serverName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreated = true;
  }


}
