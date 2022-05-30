import { Component } from '@angular/core';

@Component({
  selector: 'app-route',
  template: `
  <div>
    <h1>Gallery masonry</h1>

    <gallery-smart
      [nbColumns]="3"
    ></gallery-smart>
    
    <router-outlet></router-outlet>
  </div>`,
})
export class AppRouteComponent {
}
