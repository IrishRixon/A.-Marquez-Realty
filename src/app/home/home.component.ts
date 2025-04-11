import { Component } from '@angular/core';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { OurServicesSectionComponent } from './our-services-section/our-services-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { OurTeamComponent } from './our-team/our-team.component';
import Lenis from 'lenis';

@Component({
  selector: 'app-home',
  imports: [
    Section1Component,
    Section2Component,
    OurServicesSectionComponent,
    TestimonialsComponent,
    EmailFieldComponent,
    OurTeamComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngAfterViewInit(): void {
    // Initialize Lenis
    // const lenis = new Lenis({
    //   autoRaf: true,
    // });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
