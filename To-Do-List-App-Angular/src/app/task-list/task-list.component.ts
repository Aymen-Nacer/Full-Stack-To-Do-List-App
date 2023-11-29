import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  listTasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        console.log(tasks);
        this.listTasks = tasks;
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }
}
