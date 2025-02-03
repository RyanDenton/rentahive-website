import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() { return this.contactForm.controls; }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.isSuccess = true;
  }
}
