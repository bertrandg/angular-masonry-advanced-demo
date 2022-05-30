import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhotoAugmented, StoreService } from '../state.service';

@Component({
  selector: 'photo-item-smart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <photo-item
      [photoDetails]="photoDetails$ | async"
      (open)="open()"
    ></photo-item>`,
})
export class PhotoItemSmartComponent implements OnInit {
  @Input() id: string;
  
  photoDetails$: Observable<IPhotoAugmented>;

  constructor(
    private storeService: StoreService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.photoDetails$ = this.storeService.getPhotoDetails(this.id);
  }

  open() {
    this.router.navigate(['preview', this.id]);
  }
}
