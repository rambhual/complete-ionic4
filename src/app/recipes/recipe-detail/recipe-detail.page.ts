import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private rs: RecipesService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe(param => {
      if (!param.has('recipeId')) {
        this.route.navigate(['/recipes']);
        return false;
      }
      const recipeId = param.get('recipeId');
      this.loadedRecipe = this.rs.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(recipeId: string) {
    this.AlertDialog(recipeId);
  }

  private AlertDialog(recipeId: string) {
    this.alertController
      .create({
        header: 'Are you sure!',
        message: 'Do you really want to delete',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.rs.deleteRecipe(recipeId);
              this.route.navigate(['/recipes']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter() {
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
