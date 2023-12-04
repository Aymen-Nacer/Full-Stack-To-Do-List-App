import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ReloadService } from 'src/app/reload.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(
    private dataService: DataService,
    private reloadService: ReloadService
  ) {}

  onTaskUpdated() {
    console.log('onTaskUpdated');
    this.task.complete = !this.task.complete;
    this.dataService.updateTask(this.task.taskId, this.task).subscribe({
      next: (response: any) => {
        this.reloadParent();
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }

  onTaskDeleted() {
    console.log('onTaskDeleted');
    this.dataService.deleteTask(this.task.taskId).subscribe({
      next: (response: any) => {
        this.reloadParent();
      }, // nextHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }

  reloadParent() {
    this.reloadService.triggerReload();
  }
}
