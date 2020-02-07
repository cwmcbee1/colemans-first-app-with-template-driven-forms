import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'swapi-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {
  originalName;
  currentPerson;
  @Input() set person(value) {
    if (value) this.originalName = value.name;
      this.currentPerson = Object.assign({}, value)
  }
  
  @Output() cancelled = new EventEmitter;
  @Output() saved = new EventEmitter;
}
