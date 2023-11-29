import { Component } from '@angular/core';

class ListItems {
  'id': number;
  'name': string;
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  listItems: ListItems[] = [
    { id: 1, name: 'to do list number 1' },
    { id: 2, name: 'to do list number 2' },
  ];
}
