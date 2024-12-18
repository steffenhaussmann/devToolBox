import { Component, ElementRef, HostListener, Input, ViewChild, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PaintBucket, LucideAngularModule } from 'lucide-angular';
import { NgIf } from '@angular/common';
import { LucideIconData } from '../../models/lucide-icon-data.model';

@Component({
  selector: 'app-custom-overlay',
  standalone: true,
  templateUrl: './custom-overlay.component.html',
  styleUrl: './custom-overlay.component.scss',
  imports: [LucideAngularModule, NgIf],
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) translate(-20px, 20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1) translate(0, 0)' })),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(0.8) translate(-20px, 20px)' }),
        ),
      ]),
    ]),
  ],
})
export class CustomOverlayComponent {
  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (
      this.isOverlayVisible &&
      this.overlayRef &&
      !this.overlayRef.nativeElement.contains(target)
    ) {
      this.isOverlayVisible.set(false);
    }
  }
  @ViewChild('overlay') overlayRef!: ElementRef;
  @Input() toggleIcon?: LucideIconData;

  isOverlayVisible = signal(false);

  readonly PaintBucket = PaintBucket;

  toggleOverlay(event: MouseEvent) {
    this.isOverlayVisible.update((visible) => !visible);
  }
}
