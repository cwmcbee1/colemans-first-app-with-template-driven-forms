import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'swapi-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {


  @Input() person;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
