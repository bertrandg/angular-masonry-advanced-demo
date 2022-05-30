import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'preview-route',
  template: `
    <photo-preview-smart
      [id]="id$ | async"
    ></photo-preview-smart>`,
})
export class PreviewRouteComponent {
  id$ = this.activatedRoute.paramMap.pipe(
    map(paramMap => paramMap['image_id']),
  )

  constructor(private activatedRoute: ActivatedRoute) {}

}
