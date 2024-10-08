import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  total = signal(0);

  onClick() {
    this.total.update((value) => value + 1);
  }

  get evaluateTemplate() {
    console.log(`Evaluating template - app`);
    return '';
  }
}
