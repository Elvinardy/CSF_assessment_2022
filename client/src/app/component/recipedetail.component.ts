import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  recipeId!: string;
  recipe?: Recipe;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private recipeSvc: RecipeService) { }

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.getRecipe(this.recipeId);
    console.log(this.recipe?.instruction)
  }

  getRecipe(recipeId: string) {
    this.recipeSvc.getRecipe(recipeId)
      .then((recipe) => {
        this.recipe = recipe as Recipe;
      })
      .catch((error)  => {
        this.goBack();
        alert("No recipe found!")
      });
      }

      goBack(): void{
        this.route.navigate(['/']);

      }
  }

