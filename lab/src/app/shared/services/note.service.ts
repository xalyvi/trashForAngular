import { Injectable } from '@angular/core';
import { BaseApi } from '../core/base-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends BaseApi {

    options: HttpHeaders;

    constructor(
        public http: HttpClient
    ) {
        super(http);
        this.options = new HttpHeaders();
        this.options = this.options.set('Content-Type', 'application/json');
    }

    async getNotes() {
        return this.get('notes', this.options).toPromise();
    }

    async getNotesByUserId(id) {
        return this.get('notes?user_id=' + id, this.options).toPromise();
    }

    async postNote(data: Note) {
        return this.post('notes', data, this.options).toPromise();
    }

    async putNoteById(id, data: Note) {
        return this.put('notes/' + id, data, this.options).toPromise();
    }

    async deleteNoteById(id) {
        return this.delete('notes/' + id, this.options).toPromise();
    }
}
