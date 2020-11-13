import {Component, OnInit} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public people: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const user: Person = {
      firstName: 'Jacky',
      lastName: 'Welles'
    };
    const user1: Person = {
      firstName: 'Johnny',
      lastName: 'Silverhand'
    };
    this.people.push(user, user1);
  }

}
