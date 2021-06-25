import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/shared/interfaces/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'gl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  request: Observable<any>;
  constructor(private userService: UserService) {
    this.request = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.request.subscribe(data => this.users = data);
  }

}
