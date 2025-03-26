import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { AngelesRoutingModule } from './angeles-routing.module';
import { TheManansalaComponent } from './the-manansala/the-manansala.component';
import { NowResidencesComponent } from './now-residences/now-residences.component';
import { NowSection1Component } from './now-residences/now-section-1/now-section-1.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ImageModule } from 'primeng/image';
import { NowSection2Component } from './now-residences/now-section-2/now-section-2.component';


@NgModule({
  declarations: [
    TheManansalaComponent,
    NowResidencesComponent,
    NowSection1Component,
    NowSection2Component
  ],
  imports: [
    CommonModule,
    AngelesRoutingModule,
    AnimateOnScrollModule,
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
    InputTextModule
  ]
})
export class AngelesModule { }
