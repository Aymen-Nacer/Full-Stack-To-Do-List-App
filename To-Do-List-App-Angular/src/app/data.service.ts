import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Base URL for the API
  private apiUrl: string = environment.apiUrl;

  // Array to store the list of tasks locally
  private taskList: Task[] = [];

  constructor(private http: HttpClient) {}

  // Getter for the array
  get task_list(): Task[] {
    return this.taskList;
  }

  // Setter for the array
  set task_list(value: Task[]) {
    this.taskList = value;
  }

  // Methods to store changes locally

  // Method to update a task locally
  updateTaskLocally(task: Task) {
    let indexOfTargetTask = this.taskList.indexOf(task);
    this.taskList[indexOfTargetTask].complete = !task.complete;

    console.log('******** Updated locally successfully ********');
  }

  // Method to delete a task locally
  deleteTaskLocally(task: Task) {
    let indexOfTargetTask = this.taskList.indexOf(task);
    this.taskList.splice(indexOfTargetTask, 1);

    console.log('******** Deleted locally successfully ********');
  }

  // Method to save a task locally
  saveTaskLocally(TaskDescription: string) {
    const defaultId: number = -1;
    const newTask: Task = {
      taskId: defaultId,
      taskDescription: TaskDescription,
      complete: false,
      createdAt: new Date().getTime().toString(),
    };

    this.taskList.push(newTask);
    console.log('******** Saved locally successfully ********');
  }

  // Method to update the taskId of the last task locally
  updateLastTaskIdLocally(newTaskId: number) {
    const indexofLast = this.taskList.length - 1;
    this.taskList[indexofLast].taskId = newTaskId;
  }

  // Methods to store changes remotely

  // Method to get tasks from the API
  getTasksRemotely(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/api/todos');
  }

  // Method to save a task remotely
  saveTaskRemotely(taskDescription: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/todos', taskDescription);
  }

  // Method to update a task remotely
  updateTaskRemotely(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.put(url, null);
  }

  // Method to delete a task remotely
  deleteTaskRemotely(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.delete(url);
  }
}
