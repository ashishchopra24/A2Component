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


  constructor() {
    setTimeout(() => { this.value = true; }, 3000);
  }

  ngOnInit() {
  }

}
