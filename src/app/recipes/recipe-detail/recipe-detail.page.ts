import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private router: ActivatedRoute, private rs: RecipesService) {}

  ngOnInit() {
    this.router.paramMap.subscribe(param => {
      if (!param.has('recipeId')) {
        return false;
      }
      const recipeId = param.get('recipeId');
      this.loadedRecipe = this.rs.getRecipe(recipeId);
    });
  }
}
