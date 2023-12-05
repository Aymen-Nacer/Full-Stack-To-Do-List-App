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
  // Input property to receive task data from parent component
  @Input() task!: Task;

  constructor(
    private dataService: DataService,
    private reloadService: ReloadService
  ) {}

  // Method called when a task is updated
  onTaskUpdated() {
    // Update task locally
    this.dataService.updateTaskLocally(this.task);

    // Update task remotely and handle the response
    this.dataService.updateTaskRemotely(this.task.taskId).subscribe({
      next: (response: any) => {
        console.log('******** Updated Remotely successfully ********');
        console.log('###############################################');
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // Trigger a reload of the parent component
    this.reloadParent();
  }

  // Method called when a task is deleted
  onTaskDeleted() {
    this.dataService.deleteTaskLocally(this.task);

    this.dataService.deleteTaskRemotely(this.task.taskId).subscribe({
      next: (response: any) => {
        console.log('******** Deleted Remotely successfully ********');
        console.log('###############################################');
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
