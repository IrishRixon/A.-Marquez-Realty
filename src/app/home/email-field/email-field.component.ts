import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { WebsiteFormField } from '../../interface/form';
import { FormsubmissionAPIService } from '../../services/formsubmissionAPI/formsubmission-api.service';

@Component({
  selector: 'app-email-field',
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabel,
    TextareaModule,
    ButtonModule,
    AnimateOnScrollModule,
    ReactiveFormsModule,
  ],
  templateUrl: './email-field.component.html',
  styleUrl: './email-field.component.scss',
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
