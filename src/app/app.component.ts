import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='demo';

  subTitle = 'Let us try attribute directive!'
  subTitle1 = 'All fine!'

  colorVal = 'red';

  // username = "Two Way Binding";
  // showMsg=true;

  // success_msg = true;

  // users= ['Hari', 'Roshin', 'Jasmine'];


  // showAlert(){

  //   alert('Hello! This is an example of event binding.');
  // }
}
