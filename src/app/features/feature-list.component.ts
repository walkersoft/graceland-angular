import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IFeature } from 'src/shared/interfaces/IFeature';
import { IUser } from 'src/shared/interfaces/IUser';
import { FeatureService } from '../services/feature.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'gl-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  constructor(
    private featureService: FeatureService,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.userRequest = this.userService.getUsers();
  }
  features: IFeature[] = [];
  users: IUser[] = [];
  snackBarDuration = {duration: 5000}
  userRequest!: Observable<any>;
  taskRequest!: Observable<any>;

  featureHeaders: string[] = ['title', 'creator', 'dueDate', 'points', 'actions'];

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(data => {
      this.features = data;
    });
    this.userRequest.subscribe(data => this.users = data);
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

  getAssignees(feature: IFeature): string {
    if (feature.assignees === null) {
      return 'No assignments';
    }

    let names: string[] = [];
    feature.assignees.forEach(a => {
      let user = this.users.filter(u => u.id == a).shift();
      names.push(user?.firstName + " " + user?.lastName);
    })

    return names.join(', ');
  }

}
