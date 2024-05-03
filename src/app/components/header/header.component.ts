import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface person{
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title: string = 'Task Tracker';
  arr: string[] = ['cat', 'dog', 'mouse'];
  obj: person = {
    name: 'Kyle',
    age: 31,
    email: 'kylebaugh1@gmail.com'
  };
  otherName = 'Dyeff'

  toggleAddTask() {
    console.log('toggle')
  }
}
