import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { StoreService } from './state.service';
import { MasonryPipe } from './gallery/masonry.pipe';
import { GallerySmartComponent } from './gallery/gallery.smart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoItemSmartComponent } from './gallery/photo-item.smart.component';
import { PhotoItemComponent } from './gallery/photo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRouteComponent } from './app.route.component';
import { PreviewRouteComponent } from './preview/preview.route.component';
import { PhotoPreviewSmartComponent } from './preview/photo-preview.smart.component';
import { PhotoPreviewComponent } from './preview/photo-preview.component';

const routes = [
  {
      path: '',
      component: AppRouteComponent,
      children: [
          {
              path: 'preview/:image_id',
              component: PreviewRouteComponent,
          },
      ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [ 
    BrowserModule, 
    CommonModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
        enableTracing: false,
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled',
        paramsInheritanceStrategy: 'always',
        relativeLinkResolution: 'legacy',
    }),
  ],
  declarations: [ 
    AppComponent,
    AppRouteComponent,
    PreviewRouteComponent,
    PhotoPreviewSmartComponent,
    PhotoPreviewComponent,
    GallerySmartComponent,
    GalleryComponent,
    PhotoItemSmartComponent,
    PhotoItemComponent,
    MasonryPipe,
  ],
  bootstrap: [ AppComponent ],
  providers: [ StoreService ],
})
export class AppModule { }

