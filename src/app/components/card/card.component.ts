import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userList-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {

  @Input() users: User[];

  constructor() { }

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    console.log(this.users);
  }



}
