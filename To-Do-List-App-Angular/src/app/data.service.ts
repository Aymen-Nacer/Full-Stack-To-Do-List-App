import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl: string = environment.apiUrl;

  private taskList: Task[] = [];

  constructor(private http: HttpClient) {}

  get task_list(): Task[] {
    return this.taskList;
  }

  // Setter for the array
  set task_list(value: Task[]) {
    this.taskList = value;
  }

  // methods to store changes locally

  updateTaskLocally(task: Task) {
    let indexOfTargetTask = this.taskList.indexOf(task);
    this.taskList[indexOfTargetTask].complete = !task.complete;

    console.log('******** Updated locally successfully ********');
  }

  deleteTaskLocally(task: Task) {
    let indexOfTargetTask = this.taskList.indexOf(task);
    this.taskList.splice(indexOfTargetTask, 1);

    console.log('******** Deleted locally successfully ********');
  }

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

  updateLastTaskIdLocally(newTaskId: number) {
    const indexofLast = this.taskList.length - 1;
    this.taskList[indexofLast].taskId = newTaskId;
  }

  // methods to store changes remotely

  getTasksRemotely(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/api/todos');
  }

  saveTaskRemotely(taskDescription: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/todos', taskDescription);
  }

  updateTaskRemotely(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.put(url, null);
  }

  deleteTaskRemotely(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.delete(url);
  }
}
