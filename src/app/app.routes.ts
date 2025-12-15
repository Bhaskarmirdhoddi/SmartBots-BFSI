import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./bfsi-page/bfsi-page').then(m => m.BfsiPage)
  },
  {
    path: 'why-smartbots',
    loadComponent: () => import('./why-smartbots/why-smartbots').then(m => m.WhySmartbots)
  },
  {
    path: 'meet-team',
    loadComponent: () => import('./meet-team/meet-team').then(m => m.MeetTeam)
  },
  {
    path: 'book-demo',
    loadComponent: () => import('./book-demo/book-demo').then(m => m.BookDemo)
  },
];
