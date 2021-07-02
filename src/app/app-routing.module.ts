import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './tasks/task-details.component';
import { TaskListComponent } from './tasks/task-list.component';
import { UserListComponent } from './users/user-list.component';

const routes: Routes = [
  { path: 'view/tasks', component: TaskListComponent },
  { path: 'view/task/:id', component: TaskDetailsComponent },
  { path: 'view/users', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
