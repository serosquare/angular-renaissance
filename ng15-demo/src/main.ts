// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideRouter([
        { path: '', loadChildren: () => import('./app/app.routing').then(m => m.AppRoutes) },
        { path: 'posts', loadChildren: () => import('./app/pages/posts/posts.routing').then(m => m.postsRoutes) },
      ])
    ],
  }
)