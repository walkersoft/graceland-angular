import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/shared/interfaces/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'gl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let request = this.userService.getUsers();
    request.subscribe(data => {
      this.users = data;
    });
  }

}
