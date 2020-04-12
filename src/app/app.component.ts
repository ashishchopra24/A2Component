import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = 'Testserver';
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
  }



  onCreateServer() {
    this.servers.push(this.serverName);
  }


}
