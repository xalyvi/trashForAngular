import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [SystemComponent, NotesComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
