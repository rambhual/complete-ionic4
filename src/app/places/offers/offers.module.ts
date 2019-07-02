import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'newOffer',
    loadChildren: './new-offer/new-offer.module#NewOfferPageModule'
  },
  {
    path: 'editOffer',
    loadChildren: './edit-offer/edit-offer.module#EditOfferPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
