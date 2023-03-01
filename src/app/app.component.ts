import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Denis';
  edad : number = 29;
  btnDisabled = true;
  inputName = "Denis Zelaya"

   toggleButtom() {
    this.btnDisabled  = !this.btnDisabled
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
}
