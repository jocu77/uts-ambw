import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { IsiNote } from './isi-note';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  dataNote: IsiNote[] = [];

  constructor() { }

  public setNote(tgl: string, nam: string, isi: string) {
    const tempNote: IsiNote = {
      tanggal: tgl,
      nama: nam,
      isi,
      fav: 0
    };
    this.dataNote.push(tempNote);
  }

  public getNote() {
    return this.dataNote;
  }

  public getNoteind(ind: number) {
    return this.dataNote[ind];
  }

  public makefav(ind: number, fav: number) {
    this.dataNote[ind].fav = fav;
  }


}


