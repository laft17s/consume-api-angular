import { Component, OnInit } from '@angular/core';
import { User, Users } from 'src/app/interfaces/userList-response';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[] = [];

  constructor(private uersServices: UsersService) { }

  ngOnInit(): void {
    this.showUsers();
  }


  showUsers() {
    this.uersServices.showUsers(1, 10)
      .subscribe(resp => {
        this.users = resp.data;
      });
  }


}
