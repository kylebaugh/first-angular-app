import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  subject: Subject <Task> = new Subject()

  constructor() { }

  getTasks(): Observable <Task> {
    return this.subject
  }

  addItem(value: Task){
    this.subject.next(value)
  }

}