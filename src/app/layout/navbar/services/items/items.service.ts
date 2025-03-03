import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  items: MenuItem[] = [
    {
      label: 'San fernando',
      items: [
        {
          label: 'Azure North'
        },
        {
          label: 'Mega World'
        }
      ]
    }
  ]
}
