import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickerService } from '../../services/clicker.service';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: any;
  // @Input() task: Task;
  faTimes = faTimes;

  myFunc(){
    this.clickerService.logSomething()
  }

  onClick(){
    console.log('delete click')
  }

  constructor(private clickerService: ClickerService){}

}
