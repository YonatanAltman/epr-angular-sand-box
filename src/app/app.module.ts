import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson3Module } from '../lesson3/lesson3.module';
import { RouterModule } from '@angular/router';
import { ServiceLandModule } from '../service-land/service-land.module';
import { ObservableLandModule } from '../observable-land/observable-land.module';
import { OfficeModule } from 'src/office/office.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    Lesson3Module,
    ServiceLandModule,
    ObservableLandModule,
    OfficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
