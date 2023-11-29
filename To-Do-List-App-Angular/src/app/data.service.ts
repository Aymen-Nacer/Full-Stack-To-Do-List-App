import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  saveTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  updateTask(taskId: number, updatedData: Task): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put(url, updatedData);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete(url);
  }
}
