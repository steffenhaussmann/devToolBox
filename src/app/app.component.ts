import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './common/layout/main-menu/main-menu.component';
import { MainHeaderComponent } from './common/layout/main-header/main-header.component';
import { MainContentComponent } from './common/layout/main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainMenuComponent, RouterOutlet, MainHeaderComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devtoolbox';
}
