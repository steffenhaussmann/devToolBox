import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './common/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devtoolbox';
}
