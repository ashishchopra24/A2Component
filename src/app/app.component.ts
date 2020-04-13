import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('textName', {static: true}) contentInput: ElementRef;


  sendToServer() {
    console.log('Info sent - ' + this.contentInput.nativeElement.value);
  }
}
