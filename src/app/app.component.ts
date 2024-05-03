import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TaskListComponent, FontAwesomeModule, RouterLink, RouterLinkActive, RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
