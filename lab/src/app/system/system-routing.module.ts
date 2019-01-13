import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { UsersComponent } from './users/users.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'notes', component: NotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
