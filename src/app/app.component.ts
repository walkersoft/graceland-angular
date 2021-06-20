import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from 'src/shared/interfaces/ITask';

@Component({
  selector: 'gl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private snackBar: MatSnackBar) {}
  snackBarDuration = {duration: 5000};

  openTask(): void {
    this.snackBar.open("Opened the task.", "GOT IT!", this.snackBarDuration);
  }

  markComplete(): void {
    this.snackBar.open("Task marked complete.", "BOOYAH!", this.snackBarDuration);
  }

  deleteTask(): void {
    this.snackBar.open("Imaginary task was deleted.", "WTF!!", this.snackBarDuration);
  }

  editTask(): void {
    this.snackBar.open("Task is being worked on.", "...WORK?!", this.snackBarDuration);
  }

  ngOnInit(): void {
    this.tasks = JSON.parse(this.taskData);
  }

  getAssignees(task: ITask): string {
    let names: string[] = [];
    task.assignees.forEach(t => names.push(t.firstName + " " + t.lastName));
    return names.join(", ");
  }

  //this stupidity is just for fun
  taskData: string = `
  [
    {
      "id": 1,
      "title": "Temper the usage of Flexbox for Task Layouts",
      "description": "Make incremental improvements to the design using flexbox for layout control in conjuction with Angular Material controls.",
      "points": 14,
      "completed": false,
      "creator": "Sibyl Hosburn",
      "assignees": [
        {
          "id": "c0cd9c0a-c196-4344-a1a9-937a9ab52893",
          "firstName": "Augusto",
          "lastName": "Gaynsford",
          "email": "agaynsford0@booking.com"
        }, {
          "id": "8dadfedc-cbca-487c-b1fd-bf2065941fe7",
          "firstName": "Gae",
          "lastName": "Lyver",
          "email": "glyver1@ask.com"
        }
      ],
      "createdDate": "6/21/2020",
      "dueDate": "5/25/2021",
      "completionDate": "7/12/2021",
      "lastModifiedDate": "1/16/2021"
    }, {
      "id": 2,
      "title": "Create navigation side navigation using material",
      "description": "Need to create a navigation menu that has icons on the left side and can pop out and occupy some of the screen on desktop or be buried under a hamburger menu on mobile.",
      "points": 17,
      "completed": true,
      "creator": "Betty Keneford",
      "assignees": null,
      "createdDate": "5/6/2021",
      "dueDate": "1/1/2021",
      "completionDate": null,
      "lastModifiedDate": "10/11/2020"
    }, {
      "id": 3,
      "title": "Figured out some better styling for the card setup",
      "description": "The cards should leverage some of the profile styles.\\n\\nThey should be more concise with more of the details in the expansion pane.",
      "points": 2,
      "completed": false,
      "creator": "Gae Lyver",
      "assignees": [
        {
          "id": "4de58f3f-b805-4a74-b29f-c7d23adb9bb1",
          "firstName": "Betty",
          "lastName": "Keneford",
          "email": "bkeneford4@hao123.com"
        }, {
          "id": "b6220e47-5ffd-449c-b2fd-859c96c2b614",
          "firstName": "Sibyl",
          "lastName": "Hosburn",
          "email": "shosburn5@4shared.com"
        }, {
          "id": "4fa2c02c-fdb0-4695-a3ef-b805dad44542",
          "firstName": "Lorenza",
          "lastName": "Denzey",
          "email": "ldenzey6@soup.io"
        }
      ],
      "createdDate": "11/24/2020",
      "dueDate": "11/19/2020",
      "completionDate": "6/6/2021",
      "lastModifiedDate": "12/29/2020"
    }, {
      "id": 4,
      "title": "Add some little notifications as snack bars",
      "description": "Create some basic messages for now and wire them up to the buttons on the task items",
      "points": 13,
      "completed": true,
      "creator": "Sibyl Hosburn",
      "assignees": null,
      "createdDate": "5/17/2021",
      "dueDate": "7/1/2020",
      "completionDate": null,
      "lastModifiedDate": "1/8/2021"
    }, {
      "id": 5,
      "title": "Add some chips for basic info",
      "description": "Implement chips and identify some basic info that should be shown without having to open the expansion panel",
      "points": 13,
      "completed": true,
      "creator": "Sibyl Hosburn",
      "assignees": null,
      "createdDate": "5/17/2021",
      "dueDate": "7/1/2020",
      "completionDate": null,
      "lastModifiedDate": "1/8/2021"
    }
  ]

  `;
}
