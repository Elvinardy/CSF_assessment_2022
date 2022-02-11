import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Recipe, RecipeSummary } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipeList: RecipeSummary[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  navigateToRecipeList() {
    this.router.navigate('/recipe',recipeId);
  }

  private getRecipes() {
    this.recipeService.getAllRecipes()
    .then((recipeList) => {
      this.recipeList = recipeList.map (
        (recipe: {
          id: string,
          title: string }) =>
          ({ id: recipe.id, title: recipe.title} as RecipeSummary)
      );
    })
  }
}
