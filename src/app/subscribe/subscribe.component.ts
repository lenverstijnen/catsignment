import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  formError = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    breed: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    hobbys: new FormControl('', Validators.required),
  });

  constructor() {}

  handleSubmit() {
    console.log(this.form);

    // if (this.form.invalid) {
    //   this.formError = true;
    //   return;
    // } else {
    //   console.log(this.form.value);
    //   this.form.reset();
    // }
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
