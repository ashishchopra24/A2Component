import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value = '';

  sendToServer(textName: HTMLInputElement) {
    console.log('Info sent - ' + textName.value);
  }
}
