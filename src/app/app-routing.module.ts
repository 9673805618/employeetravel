import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 {path:"verifyuser" , component: LoginComponent},
 {path:"employee" , component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
