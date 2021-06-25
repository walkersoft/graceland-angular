import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ITask } from 'src/shared/interfaces/ITask';
import { IUser } from 'src/shared/interfaces/IUser';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'gl-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];
  users: IUser[] = [];
  taskRequest: Observable<any>
  userRequest: Observable<any>

  constructor(private snackBar: MatSnackBar, private taskService: TaskService, private userService: UserService) {
    this.taskRequest = this.taskService.getTasks();
    this.userRequest = this.userService.getUsers();
  }

  snackBarDuration = {duration: 5000};
  taskHeaders: string[] = ['title', 'creator', 'dueDate', 'points', 'actions'];

  openTask(): void {
    this.snackBar.open("Opened the task.", "GOT IT!", this.snackBarDuration);
  }

  markComplete(): void {
    this.snackBar.open("Task marked complete.", "BOOYAH!", this.snackBarDuration);
  }

  deleteTask(n: number): void {
    this.snackBar.open("Imaginary task " + n + " was deleted.", "WTF!!", this.snackBarDuration);
  }

  editTask(): void {
    this.snackBar.open("Task is being worked on.", "...WORK?!", this.snackBarDuration);
  }

  ngOnInit(): void {
    this.taskRequest.subscribe(data => this.tasks = data);
    this.userRequest.subscribe(data => this.users = data);
  }

  getCreatorName(id: string): string {
    const creator = this.users.filter(u => u.id === id).shift();
    return [creator?.firstName, creator?.lastName].join(' ');
  }

  getAssignees(task: ITask): string {
    // let names: string[] = [];
    // task.assignees.forEach(t => names.push(t.firstName + " " + t.lastName));
    // return names.join(", ");
    return 'foo';
  }
}
