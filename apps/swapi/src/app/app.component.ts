import { Component } from '@angular/core';

@Component({
  selector: 'swapi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokémon Information';


  links = [
    { path: '/pokemon', icon: 'work', title: 'Pokémon' }
  ]
}
