import { Component, EventEmitter, Output } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-our-services-section',
  imports: [AnimateOnScrollModule],
  templateUrl: './our-services-section.component.html',
  styleUrl: './our-services-section.component.scss'
})
export class OurServicesSectionComponent {
  
}
