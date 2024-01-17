import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes) },
  { path: 'posts', loadChildren: () => import('./pages/posts/posts.routes').then(m => m.postsRoutes) },
]