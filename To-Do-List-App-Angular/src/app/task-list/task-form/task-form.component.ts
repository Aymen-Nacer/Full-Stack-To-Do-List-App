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

  // Method called when a new task is added
  onTaskAdded(inputElement: HTMLInputElement): void {
    // Extract task description from the input element
    const taskDescription = inputElement.value;

    // Clear the input element after extracting task description
    inputElement.value = '';

    this.dataService.saveTaskLocally(taskDescription);

    this.dataService.saveTaskRemotely(taskDescription).subscribe({
      next: (response: Task) => {
        // Update the last task ID locally
        this.dataService.updateLastTaskIdLocally(response.taskId);

        console.log('******** Saved remotely successfully ********');
        console.log('#############################################');
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // Trigger a reload of the parent component
    this.reloadParent();
  }

  // Method to trigger a reload of the parent component
  reloadParent() {
    this.reloadService.triggerReload();
  }
}
