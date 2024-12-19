import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';
import {
  LucideAngularModule,
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  FlaskConical,
  Bug,
  PanelsTopLeft,
  EllipsisVertical,
  PaintBucket,
} from 'lucide-angular';
import { NgIf } from '@angular/common';
import { CustomOverlayComponent } from '../../components/custom-overlay/custom-overlay.component';

@Component({
  standalone: true,
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive, NgIf, CustomOverlayComponent],
})
export class MainMenuComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly ArrowRight = ArrowRight;
  readonly Download = Download;
  readonly FileText = FileText;
  readonly FlaskConical = FlaskConical;
  readonly Bug = Bug;
  readonly PanelsTopLeft = PanelsTopLeft;
  readonly EllipsisVertical = EllipsisVertical;
  readonly PaintBucket = PaintBucket;
  readonly routes = routes;

  selectedCategoryId = signal(0);
  isMenuVisible = signal(false);
  isMenuOpening = signal(false);

  navigateToFeatureCategory(categoryId: number) {
    this.selectCategory(categoryId);
  }

  isSelected(category: number): boolean {
    return this.selectedCategoryId() === category;
  }

  toggleMenu() {
    this.isMenuOpening.set(true);
    this.isMenuVisible.update((visible) => !visible);
  }

  private selectCategory(categoryId: number) {
    this.selectedCategoryId.set(categoryId);
  }

  onTransitionEnd() {
    this.isMenuOpening.set(false);
  }
}
