import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'root',
  template: '<h1>Hi, my name is {{name}} {{lastName}}</h1>',
  styleUrl: '../test.css',
})
class MyApp {
  name = 'John';
  lastName = 'Doe';
}

bootstrapApplication(MyApp);
