import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesPageModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsPageModule'
  },  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'place-detail', loadChildren: './places/discover/place-detail/place-detail.module#PlaceDetailPageModule' },
  { path: 'offer-booking', loadChildren: './places/offers/offer-booking/offer-booking.module#OfferBookingPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
