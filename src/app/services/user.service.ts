import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userStore: string = 'assets/dummy-data/users.json';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.userStore);
  }
}
