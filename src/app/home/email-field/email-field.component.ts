import { Component, EventEmitter, Output } from '@angular/core';
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
import { Message } from '../../interface/message';

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

  @Output() message: EventEmitter<Message> = new EventEmitter<Message>;

  sendEmailTimeout: boolean = false;
  emailContent!: FormGroup;

  onSubmit() {
    const { name, email, message } = this.emailContent.value;

    const value: WebsiteFormField = {
      name: name,
      email: email,
      message: message,
    };

    if(!this.sendEmailTimeout) {
      this.formSubmit.formSubmit('https://formspree.io/f/mqaevrvd', value)
    .subscribe({
      next: (res) => {
        const message: Message = {
          severity: 'success',
          summary: 'Success',
          detail: 'Message sent successfully!',
          life: 3000
        } 
        this.emitMessage(message);
        this.sendEmailTimeout = true;

        
        setTimeout(() => {
          this.sendEmailTimeout = false;
        }, 10000);
      },
      error: (err) => {
        const message: Message = {
          severity: 'error',
          summary: 'Error',
          detail: `${err}`,
          life: 3000
        }
        this.emitMessage(message);
      }
    });
    }
  }

  emitMessage(message: Message) {
    this.message.emit(message)
  }

  ngOnInit(): void {
    this.emailContent = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
}
