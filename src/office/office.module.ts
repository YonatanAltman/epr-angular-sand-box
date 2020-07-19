import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OfficeRoutingModule } from './office-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
