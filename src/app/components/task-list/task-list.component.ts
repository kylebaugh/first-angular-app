import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = []
  sub?: Subscription
  id: number = 0

  constructor(private taskService: TaskService) {

  }

  addMe() {
    const task: Task = {
      id: this.id,
      text: 'Kyle',
      day: 'asdfasdf',
      reminder: false
    }

    this.id++

    this.taskService.addItem(task)
  }


  ngOnInit(): void {
    this.sub = this.taskService.getTasks().pipe(filter((res: Task) => {
      console.log(res)
      return res.id !== 2
    }))
      .subscribe((res: Task) => {
        console.log('anything')
        this.tasks.push(res)
      })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
