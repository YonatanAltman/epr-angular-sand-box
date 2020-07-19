import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OfficeRoutingModule } from './office-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    FormsModule
  ]
})
export class OfficeModule { }
