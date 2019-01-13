import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  newNoteText: string;
  editNoteText: string;
  mode: string;
  currentNote: Note;

  constructor(
    private noteService: NoteService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.mode = 'add';
    try {
      this.getNotes();
    } catch (err) {
      console.error(err);
    }
  }

  isAddMode() {
    if (this.mode === 'add')
      return true;
    else
      return false;
  }

  isEditMode() {
    if (this.mode === 'edit')
      return true;
    else
      return false;
  }

  changeModeToEdit(newNote: Note) {
    this.newNoteText = "";
    this.mode = 'edit';
    this.currentNote = newNote;
    this.editNoteText = newNote.text;
  }

  async onEdit() {
    await this.noteService.putNoteById(this.currentNote.id, new Note(this.currentNote.id, this.editNoteText, this.currentNote.user_id));
    this.mode = 'add';
    this.getNotes();
  }

  async getNotes() {
    let notes = this.noteService.getNotesByUserId(this.authService.getCurUser().id);
    this.notes = (isNullOrUndefined(await notes)) ? [] : await notes;
  }

  async onDelete(note: Note) {
    await this.noteService.deleteNoteById(note.id);
    this.getNotes();
  }

  async onAdd() {
    await this.noteService.postNote(new Note(null, this.newNoteText, this.authService.getCurUser().id));
    this.getNotes();
  }

}
