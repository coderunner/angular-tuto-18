import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  name = input<string>();
  counterClick = output();

  nbClicks = signal(0);

  onClick() {
    this.nbClicks.update((value) => value + 1);
    this.counterClick.emit();
  }

  get evaluateTemplate() {
    console.log(`Evaluating template - ${this.name()}`);
    return '';
  }
}
