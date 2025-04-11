import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private router: Router) { }

  underDevelopment: MenuItem[] = [
    {
      label: 'Apologies, this section is under development',
    }
  ]
  condoItems: MenuItem[] = [
    {
      label: 'San fernando',
      items: [
        {
          label: 'Azure North',
          command: () => this.navigateTo('/condo/sanfernando/azurenorth')
        },
        {
          label: 'Mega World',
          command: () => this.navigateTo('/condo/sanfernando/megaworld')
        },
      ],
    },
    {
      label: 'Angeles',
      items: [
        {
          label: '15@boni place',
          command: () => this.navigateTo('/condo/angeles/boni-place')
        },
        {
          label: 'Now Residences',
          command: () => this.navigateTo('/condo/angeles/nowresidences')
        }
      ],
    },
    {
      label: 'Mexico',
      items: [
        {
          label: 'The lighthouse residences',
          command: () => this.navigateTo('/condo/mexico/lighthouse')
        }
      ]
    },
    // {
    //   label: 'Cavite',
    //   items: [
    //     {
    //       label: 'Maple Grove'
    //     }
    //   ]
    // }
  ];

  navigateTo(url: string) {
    this.router.navigateByUrl(url).catch((err)=> { console.log(err);
    });
  }
}
