import { HomeComponent, PageNotFoundComponent } from './components';

export const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '*',
    component: PageNotFoundComponent
  }
];
