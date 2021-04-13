import { Component, OnInit } from '@angular/core';
import { IsiNote } from '../isi-note';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  iniTitle: string;
  iniDate: string;
  iniContent: string;
  isinote: Array<IsiNote>;

  constructor(public globalvar: ServicesService) {
    this.isinote = this.globalvar.dataNote;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {}

  simpanNote()
  {
    if (this.isinote.find(e => e.nama === this.iniTitle))
      {console.log('Data sudah ada');}
    else {
      this.globalvar.setNote(this.iniDate, this.iniTitle, this.iniContent);
      this.isinote = this.globalvar.getNote();
      console.log(this.isinote);
    }
  }

  hapusNote()
  {
    this.isinote = this.globalvar.getNote();
  }
}
