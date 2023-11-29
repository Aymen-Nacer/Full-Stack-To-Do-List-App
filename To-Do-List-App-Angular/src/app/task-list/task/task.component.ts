import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private dataService: DataService) {}

  onTaskUpdated() {
    console.log('onTaskUpdated');
    this.task.complete = !this.task.complete;
    this.dataService.updateTask(this.task.taskId, this.task).subscribe({
      next: (response: any) => {
        console.log(response);
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
      complete: () => {
        console.log('completed');
      }, // completeHandler
    });
  }

  onTaskDeleted() {
    console.log('onTaskDeleted');
    this.dataService.deleteTask(this.task.taskId).subscribe({
      next: (response: any) => {
        console.log(response);
      }, // nextHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
      complete: () => {
        console.log('completed');
      }, // completeHandler
    });
  }
}
