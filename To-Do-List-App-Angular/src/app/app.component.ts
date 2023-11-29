import { Component } from '@angular/core';

class ListItems {
  'id': number;
  'name': string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To-Do-List-App-Angular';
  listItems: ListItems[] = [
    { id: 1, name: 'to do list number 1' },
    { id: 2, name: 'to do list number 2' },
  ];
}
