import { Injectable } from '@angular/core';
import { Photo } from '../interface/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  photos: Photo[] = [{
    itemImageSrc: '/assets/images/4pics1.png',
    thumbnailImageSrc: '/assets/images/4pics1.png',
    alt: 'desc',
    title: 'Montrose Parkview'
  },
  {
    itemImageSrc: '/assets/images/4pics2.png',
    thumbnailImageSrc: '/assets/images/4pics2.png',
    alt: 'desc',
    title: 'Chelsea Parkplace Capital Town Pampanga'
  },
  {
    itemImageSrc: '/assets/images/4pics3.png',
    thumbnailImageSrc: '/assets/images/4pics3.png',
    alt: 'desc',
    title: 'Bryant Parklane Capital Town Pampanga'
  },
  {
    itemImageSrc: '/assets/images/4pics4.png',
    thumbnailImageSrc: '/assets/images/4pics4.png',
    alt: 'desc',
    title: 'Shophouse District'
  }
]

  getImages(): Promise<Photo[]> {
    return new Promise((resolve) => {
      resolve(this.photos)
    })
  }
}
