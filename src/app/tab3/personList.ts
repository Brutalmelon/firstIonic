import { OnInit, Input } from '@angular/core';
import { Tab3Page } from './tab3.page';

export class PersonListComponent implements OnInit {
    @Input() public persons;

    constructor(private personService: Tab3Page) { }

    ngOnInit() {
        this.personService.doThing()
            .subscribe(data => console.log(data));
    }
}
