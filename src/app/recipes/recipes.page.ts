import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes);
    console.log('ionViewDidEnter');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
