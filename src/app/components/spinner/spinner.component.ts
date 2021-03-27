import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input('loading') loading = false;
  constructor() {}
}

// A small reusable component. I tried to put the template
// in this file but had a fight with Prettier so I put it back in spinner.component.html
