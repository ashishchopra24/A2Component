import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverName = '';
  servers = ['Testserver', 'Testserver 2'];
  @Output() count = new EventEmitter<void>();

  constructor() {
  }



  onCreateServer() {
    this.servers.push(this.serverName);
    this.count.emit();
  }

}
