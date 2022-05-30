import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhotoAugmented, StoreService } from '../state.service';

@Component({
  selector: 'photo-preview-smart',
  template: `
    <photo-preview
      [photoDetails]="photoDetails$ | async"
    ></photo-preview>`,
})
export class PhotoPreviewSmartComponent implements OnInit {
  @Input() id: string;
  
  photoDetails$: Observable<IPhotoAugmented>;

  constructor(
    private storeService: StoreService,
  ) {}

  ngOnInit() {
    this.photoDetails$ = this.storeService.getPhotoDetails(this.id);
  }

}
