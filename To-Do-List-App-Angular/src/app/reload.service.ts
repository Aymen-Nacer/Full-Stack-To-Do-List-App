import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReloadService {
  // Subject used for triggering reload events
  private reloadSubject = new Subject<void>();

  // Method to get an observable for reload events
  getReloadObservable() {
    return this.reloadSubject.asObservable();
  }

  // Method to trigger a reload event
  triggerReload() {
    this.reloadSubject.next();
  }
}
