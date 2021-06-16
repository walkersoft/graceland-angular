import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/shared/interfaces/ITask';

@Component({
  selector: 'gl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: ITask[] = [];

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
      "title": "tempor turpis nec euismod scelerisque quam",
      "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "points": 17,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "5/6/2021",
      "dueDate": "1/1/2021",
      "completionDate": null,
      "lastModifiedDate": "10/11/2020"
    }, {
      "id": 3,
      "title": "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
      "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "points": 2,
      "completed": false,
      "creator": null,
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
      "title": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
      "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "points": 13,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "5/17/2021",
      "dueDate": "7/1/2020",
      "completionDate": null,
      "lastModifiedDate": "1/8/2021"
    }, {
      "id": 5,
      "title": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
      "description": null,
      "points": 12,
      "completed": true,
      "creator": null,
      "assignees": [
        {
          "id": "871a4ddf-969f-40cb-b26d-e01eb4e1909d",
          "firstName": "Kelley",
          "lastName": "Aubri",
          "email": "kaubri7@multiply.com"
        }
      ],
      "createdDate": "5/15/2021",
      "dueDate": "6/23/2021",
      "completionDate": "2/19/2021",
      "lastModifiedDate": "12/25/2020"
    }, {
      "id": 6,
      "title": "augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "points": 5,
      "completed": true,
      "creator": null,
      "assignees": [
        {
          "id": "07a06606-1648-4bc8-a053-946dbcb88ade",
          "firstName": "Helyn",
          "lastName": "Lorence",
          "email": "hlorence8@nhs.uk"
        }, {
          "id": "ab0b78a5-035d-4336-86fb-680673bf8709",
          "firstName": "Romola",
          "lastName": "O' Ronan",
          "email": "roronan9@issuu.com"
        }
      ],
      "createdDate": "8/3/2020",
      "dueDate": "3/5/2021",
      "completionDate": "3/4/2021",
      "lastModifiedDate": "7/18/2020"
    }, {
      "id": 7,
      "title": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
      "description": null,
      "points": 5,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "2dd5d7bb-f106-40ad-9101-e104addccb0c",
          "firstName": "Brucie",
          "lastName": "Ogus",
          "email": "bogusb@google.cn"
        }, {
          "id": "ab0b78a5-035d-4336-86fb-680673bf8709",
          "firstName": "Romola",
          "lastName": "O' Ronan",
          "email": "roronan9@issuu.com"
        }
      ],
      "createdDate": "7/1/2020",
      "dueDate": "11/6/2020",
      "completionDate": "2/19/2021",
      "lastModifiedDate": "4/23/2021"
    }, {
      "id": 8,
      "title": "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "points": 1,
      "completed": false,
      "creator": null,
      "assignees": null,
      "createdDate": "2/7/2021",
      "dueDate": "6/5/2020",
      "completionDate": null,
      "lastModifiedDate": "5/27/2020"
    }, {
      "id": 9,
      "title": "venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
      "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "points": 12,
      "completed": false,
      "creator": null,
      "assignees": null,
      "createdDate": "6/1/2020",
      "dueDate": "1/12/2021",
      "completionDate": null,
      "lastModifiedDate": "1/20/2021"
    }, {
      "id": 10,
      "title": "porttitor lacus at turpis donec posuere metus vitae ipsum",
      "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "points": 10,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "8dadfedc-cbca-487c-b1fd-bf2065941fe7",
          "firstName": "Gae",
          "lastName": "Lyver",
          "email": "glyver1@ask.com"
        }, {
          "id": "f44cf76f-71c0-4aaa-8c55-4fcfdb0d6a11",
          "firstName": "Giff",
          "lastName": "Callear",
          "email": "gcallear2@pcworld.com"
        }, {
          "id": "37a26133-8334-4e38-9766-7b4c5940686e",
          "firstName": "Sigismundo",
          "lastName": "Girodin",
          "email": "sgirodin3@theguardian.com"
        }
      ],
      "createdDate": "8/8/2020",
      "dueDate": "5/24/2020",
      "completionDate": "6/7/2021",
      "lastModifiedDate": "5/20/2020"
    }, {
      "id": 11,
      "title": "maecenas pulvinar lobortis est phasellus sit amet erat",
      "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\\n\\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\\n\\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "points": 7,
      "completed": false,
      "creator": null,
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
        }
      ],
      "createdDate": "7/26/2020",
      "dueDate": "12/4/2020",
      "completionDate": "4/5/2021",
      "lastModifiedDate": "10/7/2020"
    }, {
      "id": 12,
      "title": "platea dictumst morbi vestibulum velit id pretium iaculis diam",
      "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "points": 2,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "4fa2c02c-fdb0-4695-a3ef-b805dad44542",
          "firstName": "Lorenza",
          "lastName": "Denzey",
          "email": "ldenzey6@soup.io"
        }
      ],
      "createdDate": "11/27/2020",
      "dueDate": "5/29/2021",
      "completionDate": "8/28/2020",
      "lastModifiedDate": "11/8/2020"
    }, {
      "id": 13,
      "title": "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
      "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
      "points": 10,
      "completed": false,
      "creator": null,
      "assignees": null,
      "createdDate": "6/5/2020",
      "dueDate": "4/17/2021",
      "completionDate": null,
      "lastModifiedDate": "8/11/2020"
    }, {
      "id": 14,
      "title": "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "points": 15,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "871a4ddf-969f-40cb-b26d-e01eb4e1909d",
          "firstName": "Kelley",
          "lastName": "Aubri",
          "email": "kaubri7@multiply.com"
        }
      ],
      "createdDate": "8/31/2020",
      "dueDate": "7/10/2020",
      "completionDate": "2/9/2021",
      "lastModifiedDate": "9/3/2020"
    }, {
      "id": 15,
      "title": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "points": 7,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "1/4/2021",
      "dueDate": "11/17/2020",
      "completionDate": null,
      "lastModifiedDate": "9/12/2020"
    }, {
      "id": 16,
      "title": "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "points": 4,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "4/5/2021",
      "dueDate": "3/11/2021",
      "completionDate": null,
      "lastModifiedDate": "9/25/2020"
    }, {
      "id": 17,
      "title": "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
      "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "points": 9,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "871a4ddf-969f-40cb-b26d-e01eb4e1909d",
          "firstName": "Kelley",
          "lastName": "Aubri",
          "email": "kaubri7@multiply.com"
        }
      ],
      "createdDate": "2/7/2021",
      "dueDate": "11/5/2020",
      "completionDate": "4/22/2021",
      "lastModifiedDate": "3/26/2021"
    }, {
      "id": 18,
      "title": "montes nascetur ridiculus mus vivamus vestibulum",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "points": 7,
      "completed": true,
      "creator": null,
      "assignees": [
        {
          "id": "b6220e47-5ffd-449c-b2fd-859c96c2b614",
          "firstName": "Sibyl",
          "lastName": "Hosburn",
          "email": "shosburn5@4shared.com"
        }, {
          "id": "4fa2c02c-fdb0-4695-a3ef-b805dad44542",
          "firstName": "Lorenza",
          "lastName": "Denzey",
          "email": "ldenzey6@soup.io"
        }, {
          "id": "871a4ddf-969f-40cb-b26d-e01eb4e1909d",
          "firstName": "Kelley",
          "lastName": "Aubri",
          "email": "kaubri7@multiply.com"
        }, {
          "id": "07a06606-1648-4bc8-a053-946dbcb88ade",
          "firstName": "Helyn",
          "lastName": "Lorence",
          "email": "hlorence8@nhs.uk"
        }
      ],
      "createdDate": "3/31/2021",
      "dueDate": "7/23/2020",
      "completionDate": "2/1/2021",
      "lastModifiedDate": "8/10/2020"
    }, {
      "id": 19,
      "title": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "points": 18,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "f44cf76f-71c0-4aaa-8c55-4fcfdb0d6a11",
          "firstName": "Giff",
          "lastName": "Callear",
          "email": "gcallear2@pcworld.com"
        }, {
          "id": "37a26133-8334-4e38-9766-7b4c5940686e",
          "firstName": "Sigismundo",
          "lastName": "Girodin",
          "email": "sgirodin3@theguardian.com"
        }
      ],
      "createdDate": "8/15/2020",
      "dueDate": "9/26/2020",
      "completionDate": "1/17/2021",
      "lastModifiedDate": "4/20/2021"
    }, {
      "id": 20,
      "title": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\\n\\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\\n\\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "points": 4,
      "completed": true,
      "creator": null,
      "assignees": [
        {
          "id": "c0cd9c0a-c196-4344-a1a9-937a9ab52893",
          "firstName": "Augusto",
          "lastName": "Gaynsford",
          "email": "agaynsford0@booking.com"
        }
      ],
      "createdDate": "4/5/2021",
      "dueDate": "2/12/2021",
      "completionDate": "8/11/2020",
      "lastModifiedDate": "12/8/2020"
    }, {
      "id": 21,
      "title": "posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "points": 2,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "c0cd9c0a-c196-4344-a1a9-937a9ab52893",
          "firstName": "Augusto",
          "lastName": "Gaynsford",
          "email": "agaynsford0@booking.com"
        }
      ],
      "createdDate": "5/3/2020",
      "dueDate": "6/16/2020",
      "completionDate": "5/29/2021",
      "lastModifiedDate": "6/16/2020"
    }, {
      "id": 22,
      "title": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
      "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "points": 12,
      "completed": false,
      "creator": null,
      "assignees": null,
      "createdDate": "5/27/2021",
      "dueDate": "10/31/2020",
      "completionDate": null,
      "lastModifiedDate": "7/1/2021"
    }, {
      "id": 23,
      "title": "in faucibus orci luctus et ultrices posuere",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\\n\\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\\n\\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "points": 8,
      "completed": false,
      "creator": null,
      "assignees": [
        {
          "id": "ab0b78a5-035d-4336-86fb-680673bf8709",
          "firstName": "Romola",
          "lastName": "O' Ronan",
          "email": "roronan9@issuu.com"
        }, {
          "id": "7dc48960-ec37-4998-9745-c76fb23bda5f",
          "firstName": "Pascale",
          "lastName": "Thornbarrow",
          "email": "pthornbarrowa@npr.org"
        }
      ],
      "createdDate": "10/12/2020",
      "dueDate": "6/20/2020",
      "completionDate": "5/1/2021",
      "lastModifiedDate": "7/10/2020"
    }, {
      "id": 24,
      "title": "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
      "description": null,
      "points": 15,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "4/14/2021",
      "dueDate": "8/23/2020",
      "completionDate": null,
      "lastModifiedDate": "7/17/2020"
    }, {
      "id": 25,
      "title": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
      "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "points": 1,
      "completed": true,
      "creator": null,
      "assignees": null,
      "createdDate": "2/26/2021",
      "dueDate": "6/8/2020",
      "completionDate": null,
      "lastModifiedDate": "10/31/2020"
    }
  ]

  `;
}
