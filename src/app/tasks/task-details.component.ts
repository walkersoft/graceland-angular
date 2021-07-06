import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITask } from 'src/shared/interfaces/ITask';
import { IUser } from 'src/shared/interfaces/IUser';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'gl-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  userRequest: Observable<any>;
  taskRequest: Observable<any>;
  snackBarDuration = {duration: 5000}
  users!: IUser[];
  task!: ITask;
  taskId: any;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.userRequest = userService.getUsers();
    this.taskRequest = taskService.getTasks();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.taskId = p.get('id'));
    let tasks: ITask[] = [];
    this.userRequest.subscribe(data => this.users = data);
    this.taskRequest.subscribe(data => {
      tasks = data;
      this.task = <ITask>tasks.filter(t => t.id == this.taskId).shift();
    });
  }

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
  reopenTask(): void {
    this.snackBar.open("Task was re-opened", "DANG...", this.snackBarDuration);
  }

  getCreatorName(id: string): string {
    if (!this.users) return ''; //null check - how to get around this?
    const creator = this.users.filter(u => u.id === id).shift();
    return [creator?.firstName, creator?.lastName].join(' ');
  }

  getAssignees(task: ITask): string {
    if (task.assignees === null) {
      return 'No assignments';
    }

    let names: string[] = [];
    task.assignees.forEach(a => {
      let user = this.users.filter(u => u.id == a).shift();
      names.push(user?.firstName + " " + user?.lastName);
    })

    return names.join(', ');
  }

}
