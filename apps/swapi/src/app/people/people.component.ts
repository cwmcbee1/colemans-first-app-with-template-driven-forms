import { Component, OnInit} from '@angular/core';
import { SwapiService, Person } from '@swapi/core-data';
import { Observable } from 'rxjs';


@Component({

  selector: 'swapi-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  primaryColor: '';
  person$;
  people;
  selectedPerson: Person;

  constructor(private swapiService: SwapiService) {

   }

  ngOnInit() {
    this.getPerson();
    this.resetPerson();
  }

  selectPerson(person) {
    this.selectedPerson = person;
  }

  getPerson() {
    this.person$ = this.swapiService.all();
  }

  resetPerson() {
    const emptyPerson: Person = {
      id: null,
      name: '',
      type: '',
      weight: '',
      height: '',
      number: ''
    }
    this.selectPerson(emptyPerson);
  }

  savePerson(person) {
    if(!person.id) {
      this.createPerson(person);
    } else {
      this.updatePerson(person);
    }
  }

  createPerson(person) {
    this.swapiService.create(person)
      .subscribe(result => {
        this.getPerson();
        this.resetPerson();
      });
  }

  updatePerson(person) {
    this.swapiService.update(person)
      .subscribe(result => {
        this.getPerson();
        this.resetPerson();
      });
  }

  deletePerson(person) {
    this.swapiService.delete(person).subscribe(res =>
        this.getPerson()
      );
  }

  cancel() {
    this.resetPerson();
  }
}
