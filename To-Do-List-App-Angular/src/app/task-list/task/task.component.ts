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
    this.dataService.updateTaskLocally(this.task);
    this.dataService.updateTaskRemotely(this.task.taskId).subscribe({
      next: (response: any) => {
        console.log('******** Updated Remotely successfully ********');
        console.log('###############################################');
      }, // completeHandler
      error: (err: any) => {
        console.log(err);
      }, // errorHandler
    });
    this.reloadParent();
  }

  onTaskDeleted() {
    this.dataService.deleteTaskLocally(this.task);
    this.dataService.deleteTaskRemotely(this.task.taskId).subscribe({
      next: (response: any) => {
        console.log('******** Deleted Remotely successfully ********');
        console.log('###############################################');
      }, // nextHandler
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
