import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeeComponent } from './list-employee.component';

const routes: Routes = [
    { path: '', component: ListEmployeeComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit/:id', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
