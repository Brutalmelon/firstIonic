import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  userName;
  userAge;
  userDesires;
  constructor() {}

  btnConsole(){
    console.log('Your name is: ' + this.userName + '\n'
     + 'You are ' + this.userAge + ' years old.' +
     '\nYour darkest desire: ' + this.userDesires);
  }

  btnAlert(){
    alert('Your name is: ' + this.userName + '\n'
     + 'You are ' + this.userAge + ' years old.' +
     '\nYour deepest desire: ' + this.userDesires);
  }


}

