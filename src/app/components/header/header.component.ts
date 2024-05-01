import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = 'Task Tracker';
  arr = ['cat', 'dog', 'mouse'];
  obj = {
    name: 'Kyle',
    age: 31,
    email: 'kylebaugh1@gmail.com'
  };
  otherName = 'Dyeff'

  toggleAddTask() {
    console.log('toggle')
  }
}
