import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { LoginComponent } from '@swapi/ui-login';


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'pokemon', component: PeopleComponent},
    { path: '', component: PeopleComponent },
    { path: '**', redirectTo: 'pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot  (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
