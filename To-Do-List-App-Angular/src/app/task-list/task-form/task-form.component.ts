import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ReloadService } from 'src/app/reload.service';
import { Task } from 'src/app/task';

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
    this.dataService.saveTaskLocally(TaskDescription);
    this.dataService.saveTaskRemotely(TaskDescription).subscribe({
      next: (response: Task) => {
        this.dataService.updateLastTaskIdLocally(response.taskId);
        console.log('******** Saved remotely successfully ********');
        console.log('#############################################');
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });

    this.reloadParent();
  }

  reloadParent() {
    this.reloadService.triggerReload();
  }
}
