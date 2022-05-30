import { Component, OnInit } from '@angular/core';
import { StoreService } from './state.service';

@Component({
  selector: 'app-route',
  template: `
  <div>
    <h1 [routerLink]="['preview', 1]">Gallery masonry</h1>

    <gallery-smart
      [nbColumns]="3"
    ></gallery-smart>
    
    <router-outlet></router-outlet>
  </div>`,
})
export class AppRouteComponent implements OnInit {

  constructor(
    private storeService: StoreService,
  ) {}

  ngOnInit() {
    // Go load page 1
    this.storeService.loadNextPage();
  }
}
