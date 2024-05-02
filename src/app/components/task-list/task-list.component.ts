import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = []

  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => this.tasks = res)
  }

}
