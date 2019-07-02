import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Essel World',
      `EsselWorld is an amusement park 
      located in Gorai, Mumbai and established in 
      1989. The park is owned by EsselWorld Leisure Pvt.
       Ltd. EsselWorld along with its counterparts, Water
        Kingdom are stretched over 64 acres of land. Together, they are recognized as one 
      of the largest Amusement And Water Park`,
      'https://i.ytimg.com/vi/ELFLhh7_PFg/maxresdefault.jpg',
      900
    ),
    new Place(
      'p2',
      'Chotha Kashmir Boat Club',
      `Laid-back recreational area featuring a lake for paddle 
      boats & a modest carnival with rides & eats.`,
      'https://storage.googleapis.com/ehimages/2019/1/2/img_49690febb52541156afacc3037c6f6ab_1546414821387_original.jpg',
      1000
    ),
    new Place(
      'p3',
      'Tikuji-ni-Wadi',
      `Tikuji-Ni-Wadi is an amusement park, 
      water park, and a resort near Mumbai and at
       Thane. It is located at about 15 kilometres 
       from Mumbai. The Water Park has pools and water 
       slides. The amusement park includes go-karts,
       roller coasters, giant wheels and water park.`,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTs6cRZCiDN4JTZHDAEkB52Yf4P_R8mboEqH6qmi5aeWsfU6Agw',
      1200
    )
  ];
  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return { ...this.places.find(place => place.id === placeId) };
  }
  constructor() {}
}
