import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskStore: string = 'assets/dummy-data/tasks.json';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.taskStore);
  }
}
