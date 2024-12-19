import { Component, input } from '@angular/core';
import { FeatureButton } from '../../../models/feature-button.model';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-feature-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './feature-button.component.html',
  styleUrl: './feature-button.component.scss',
})
export class FeatureButtonComponent {
  readonly feature = input<FeatureButton>();
}
