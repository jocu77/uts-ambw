/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IsiNote } from '../isi-note';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private route: ActivatedRoute,
    public globalvar: ServicesService) {}

    note: IsiNote;
    index: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    const index = this.route.snapshot.paramMap.get('ind');
    this.index = index;

    this.note = this.globalvar.getNoteind(+index);
  }

}
