import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ReloadService } from 'src/app/reload.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  constructor(
    private dataService: DataService,
    private reloadService: ReloadService
  ) {}

  onTaskAdded(inputElement: HTMLInputElement): void {
    const TaskDescription = inputElement.value;
    inputElement.value = '';
    this.dataService.saveTask(TaskDescription).subscribe({
      next: (response: any) => {
        this.reloadParent();
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
  }

  reloadParent() {
    this.reloadService.triggerReload();
  }
}
