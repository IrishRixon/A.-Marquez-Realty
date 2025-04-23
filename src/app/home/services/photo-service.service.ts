import { Injectable } from '@angular/core';
import { Photo } from '../interface/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  photos: Photo[] = [{
    itemImageSrc: '/assets/images/4pics1.webp',
    thumbnailImageSrc: '/assets/images/4pics1.webp',
    alt: 'Montrose Parkview',
    title: 'Montrose Parkview'
  },
  {
    itemImageSrc: '/assets/images/4pics2.webp',
    thumbnailImageSrc: '/assets/images/4pics2.webp',
    alt: 'Chelsea Parkplace Capital Town Pampanga',
    title: 'Chelsea Parkplace Capital Town Pampanga'
  },
  {
    itemImageSrc: '/assets/images/4pics3.webp',
    thumbnailImageSrc: '/assets/images/4pics3.webp',
    alt: 'Bryant Parklane Capital Town Pampanga',
    title: 'Bryant Parklane Capital Town Pampanga'
  },
  {
    itemImageSrc: '/assets/images/4pics4.webp',
    thumbnailImageSrc: '/assets/images/4pics4.webp',
    alt: 'Shophouse District',
    title: 'Shophouse District'
  }
]

  getImages(): Promise<Photo[]> {
    return new Promise((resolve) => {
      resolve(this.photos)
    })
  }
}
