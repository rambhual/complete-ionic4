import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;
  constructor(
    private activateRoute: ActivatedRoute,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        return false;
      }
      const placeId = paramMap.get('placeId');
      this.loadedPlace = this.placeService.getPlace(placeId);
    });
  }
}
