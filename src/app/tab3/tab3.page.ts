import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from './person';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})


export class Tab3Page {

  @Input() public persons;

  randomNumber;
  private url = 'https://swapi.co/api/people/';
  constructor(private http: HttpClient) {}
  theOne = this.doThing();

  doThing(): Observable<IPerson[]> {
    this.randomNumber = Math.floor((Math.random() * 87) + 1);
    console.log('doing this');
    return this.http.get<IPerson[]>(this.url + this.randomNumber + '/');

  }

  printThing() {
    this.doThing().subscribe((data: any) => {
      this.theOne = data;
      console.log(this.theOne);
    }
    );
  }

}

