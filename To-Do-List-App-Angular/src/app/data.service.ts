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

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/api/todos');
  }

  saveTask(taskDescription: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/todos', taskDescription);
  }

  updateTask(taskId: number, updatedData: Task): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.put(url, updatedData);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/api/todos/${taskId}`;
    return this.http.delete(url);
  }
}
