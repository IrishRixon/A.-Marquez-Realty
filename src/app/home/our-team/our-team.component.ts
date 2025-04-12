import { Component, EventEmitter, Output } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-our-team',
  imports: [AnimateOnScrollModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

}
