import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userList-response';

import {
  faEdit,
  faEraser,
  faInfo
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  faEdit = faEdit;
  faEraser = faEraser;
  faInfo = faInfo;

  @Input() users: User[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }

}
