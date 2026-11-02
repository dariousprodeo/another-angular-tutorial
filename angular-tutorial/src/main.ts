import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: ` <div>
    <span>Insert your name: </span>
    <input #Input placeholder="{{ name }}, insert your SSN" />
    <button (click)="textMethod(Input.value)">Trust me bro.</button>
    <h2>{{ textSent }}</h2>
  </div>`,
})
export class MyApp {
  name = 'John';
  textSent = '';

  textMethod(text: string) {
    this.textSent = text;
  }
}

bootstrapApplication(MyApp);
