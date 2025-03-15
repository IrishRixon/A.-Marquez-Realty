import { Component } from '@angular/core';
import { WebsiteFormField } from '../../../../interface/form';
import { FormsubmissionAPIService } from '../../../../services/formsubmissionAPI/formsubmission-api.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-email-field',
  standalone: false,
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.scss'
})
export class EmailFieldComponent {
  constructor(
    private formBuilder: FormBuilder,
    private formSubmit: FormsubmissionAPIService
  ) {}

  emailContent!: FormGroup;

  onSubmit() {
    const { name, email, message } = this.emailContent.value;

    const value: WebsiteFormField = {
      name: name,
      email: email,
      message: message,
    };

    this.formSubmit.formSubmit('https://formspree.io/f/mqaevrvd', value)
    .subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.emailContent = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
}
