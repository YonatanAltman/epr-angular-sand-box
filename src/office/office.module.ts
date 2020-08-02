import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OfficeRoutingModule } from './office-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { InputModule } from '../input/input.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, EmployeeComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,  ]
})
export class OfficeModule { }
