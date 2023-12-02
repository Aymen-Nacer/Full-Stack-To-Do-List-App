import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  constructor(private dataService: DataService) {}

  onTaskAdded(inputElement: HTMLInputElement): void {
    const TaskDescription = inputElement.value;
    this.dataService.saveTask(TaskDescription).subscribe({
      next: (response: any) => {}, // completeHandler
      error: (err: any) => {}, // errorHandler
    });
  }
}
