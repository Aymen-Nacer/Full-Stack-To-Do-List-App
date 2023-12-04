import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../task';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  listTasks: Task[] = [];

  constructor(
    private dataService: DataService,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {
    this.fetchData();

    this.reloadService.getReloadObservable().subscribe(() => {
      this.reload();
    });
  }

  reload() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.listTasks = tasks;
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }
}
