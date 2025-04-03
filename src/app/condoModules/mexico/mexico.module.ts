import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MexicoRoutingModule } from './mexico-routing.module';
import { LighthouseComponent } from './lighthouse/lighthouse.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { LighthouseSection1Component } from './lighthouse/lighthouse-section-1/lighthouse-section-1.component';
import { LighthouseSection2Component } from './lighthouse/lighthouse-section-2/lighthouse-section-2.component';
import { LighthouseSection3Component } from './lighthouse/lighthouse-section-3/lighthouse-section-3.component';
import { LighthouseSection4Component } from './lighthouse/lighthouse-section-4/lighthouse-section-4.component';
import { LighthouseSection5Component } from './lighthouse/lighthouse-section-5/lighthouse-section-5.component';

@NgModule({
  declarations: [
    LighthouseComponent,
    LighthouseSection1Component,
    LighthouseSection2Component,
    LighthouseSection3Component,
    LighthouseSection4Component,
    LighthouseSection5Component
  ],
  imports: [
    CommonModule,
    MexicoRoutingModule,
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
    SharedModuleModule,
    InputTextModule
  ]
})
export class MexicoModule { }
