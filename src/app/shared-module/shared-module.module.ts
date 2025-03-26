import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube/youtube.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    YoutubeComponent,
    EmailFieldComponent
  ],
  exports: [
    YoutubeComponent, 
    EmailFieldComponent,
    ReactiveFormsModule,
    ImageModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    DialogModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    FloatLabelModule,
    InputTextModule,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    DialogModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    FloatLabelModule,
    InputTextModule,
  ]
})
export class SharedModuleModule { }
