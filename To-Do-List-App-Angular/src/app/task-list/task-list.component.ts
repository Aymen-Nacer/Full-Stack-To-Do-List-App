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
  // Array to store the list of tasks
  listTasks: Task[] = [];

  constructor(
    private dataService: DataService,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {
    this.fetchDataFromApi();

    this.reloadService.getReloadObservable().subscribe(() => {
      // Reload the UI when a reload event is triggered
      this.reload();
    });
  }

  // Method to reload the UI with the latest data
  reload() {
    console.log('**************** Updating the UI ****************');

    this.listTasks = this.dataService.task_list;

    console.log('******** Retreived Locally successfully *********');
  }

  // Method to fetch data from the API
  fetchDataFromApi() {
    this.dataService.getTasksRemotely().subscribe({
      next: (tasks: Task[]) => {
        // Update the task_list in the service and listTasks array with the fetched data
        this.dataService.task_list = tasks;
        this.listTasks = tasks;

        console.log('******** Retreived remotely successfully ********');
        console.log('#################################################');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
