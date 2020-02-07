import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@swapi/material';
import { UiToolbarModule } from '@swapi/ui-toolbar';
import { UiLoginModule } from '@swapi/ui-login';
import { CoreDataModule } from '@swapi/core-data';

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, PeopleListComponent, PeopleDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    CoreDataModule,
    HttpClientModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
