import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanFernandoRoutingModule } from './san-fernando-routing.module';
import { AzureNorthComponent } from './azure-north/azure-north.component';
import { Section1Component } from './azure-north/section-1/section-1.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Section2Component } from './azure-north/section-2/section-2.component';
import { ImageModule } from 'primeng/image';
import { Section3Component } from './azure-north/section-3/section-3.component';
import { Section4Component } from './azure-north/section-4/section-4.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { YoutubeComponent } from '../../shared-module/youtube/youtube.component';
import { EmailFieldComponent } from '../../shared-module/email-field/email-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MegaWorldComponent } from './mega-world/mega-world/mega-world.component';
import { MegaSection1Component } from './mega-world/mega-world/section-1/section-1.component';
import { MegaSection2Component } from './mega-world/mega-world/mega-section-2/mega-section-2.component';
import { MegaSection3Component } from './mega-world/mega-world/mega-section-3/mega-section-3.component';
import { MegaSection4Component } from './mega-world/mega-world/mega-section-4/mega-section-4.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AzureNorthComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    MegaWorldComponent,
    MegaSection1Component,
    MegaSection2Component,
    MegaSection3Component,
    MegaSection4Component
  ],
  imports: [
    CommonModule,
    SanFernandoRoutingModule,
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
    InputTextModule,
    SharedModuleModule,
  ],
})
export class SanFernandoModule {}
