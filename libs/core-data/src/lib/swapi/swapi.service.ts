import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'https://ramen-flavors-db.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  model = 'pokemon';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  
  create(person) {
    return this.httpClient.post(this.getUrl(), person);
  }

  update(person) {
    return this.httpClient.patch(this.getUrlForId(person.id), person);
  }

  delete(person) {
    return this.httpClient.delete(this.getUrlForId(person.id));
  }
}

