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
    this.fetchDataFromApi();

    this.reloadService.getReloadObservable().subscribe(() => {
      this.reload();
    });
  }

  reload() {
    console.log('**************** Updating the UI ****************');
    this.listTasks = this.dataService.task_list;
    console.log('******** Retreived Locally successfully *********');
  }

  fetchDataFromApi() {
    this.dataService.getTasksRemotely().subscribe({
      next: (tasks: Task[]) => {
        this.dataService.task_list = tasks;
        this.listTasks = tasks;
        console.log('******** Retreived remotely successfully ********');
        console.log('#################################################');
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }
}
