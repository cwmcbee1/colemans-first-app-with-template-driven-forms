import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from './swapi/swapi.service';

@NgModule({
  imports: [CommonModule],
  providers: [ SwapiService ]
})
export class CoreDataModule {}
