import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  discovers: Place[] = [];
  constructor(private placeService: PlacesService, private ps: PlacesService) {}

  ngOnInit() {
    this.discovers = this.placeService.getPlaces();
  }
  ionViewDidEnter() {}
}
