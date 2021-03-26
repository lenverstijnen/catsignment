import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  submitValue = {};
  formError = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    hobbys: new FormControl('', Validators.required),
  });

  constructor() {}

  handleSubmit() {
    if (this.form.invalid) {
      this.formError = true;
      return;
    } else {
      this.formError = false;
      this.submitValue = this.form.value;
    }
  }

  handleReset() {
    this.submitValue = {};
    this.form.reset();
  }

  get isSubmitted() {
    return !!Object.keys(this.submitValue).length;
  }

  get breed() {
    return this.form.get('breed')!;
  }

  get name() {
    return this.form.get('name')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get hobbys() {
    return this.form.get('hobbys')!;
  }
}

// Of course this form doesn't do anything usefull, but i implemented a Reactive
// Form and added some validation. Everything could be better and more proffessional of
// course. I really like the fact that all of this works out of the box in Angular.
