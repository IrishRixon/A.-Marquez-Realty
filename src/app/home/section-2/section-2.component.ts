import { Component, EventEmitter, Output } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { model } from '@angular/core';
import { PhotoService } from '../services/photo-service.service';
import { Option, Photo } from '../interface/photos';

@Component({
  selector: 'app-section-2',
  imports: [GalleriaModule],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss',
  providers: [PhotoService],
})
export class Section2Component {
  images: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  @Output() valueChange: EventEmitter<Photo[]> = new EventEmitter<Photo[]>;

  responsivenessOptions: Option[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  onValueChange(event: any) {
    this.images = event;
    this.valueChange.emit(this.images);
  }

  ngOnInit() {
    this.photoService.getImages().then((images) => this.images = images)
  }
}
