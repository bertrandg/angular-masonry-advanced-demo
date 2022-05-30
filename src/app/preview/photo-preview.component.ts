import { Component, Input } from '@angular/core';
import { IPhotoAugmented } from '../state.service';

@Component({
  selector: 'photo-preview',
  template: `
    photoDetails
    {{ photoDetails.author }}
    photoDetails
    {{ photoDetails.url }}`,
})
export class PhotoPreviewComponent {
  @Input() photoDetails: IPhotoAugmented;
  
}
