import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'root',
  template: '<h1>Lorem ipsum!</h1>',
})
class MyApp {}

bootstrapApplication(MyApp);
