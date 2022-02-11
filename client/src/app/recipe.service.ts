import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, of } from 'rxjs';
import { RECIPE } from './mock-recipes';
import { RecipeSummary } from './recipe';

@Injectable()
export class RecipeService {

private serverRecipesUrl = "http://localhost:8080/api/recipes";
private  SingleRecipeUrl = "http://localhost:8080/api/recipe";

constructor(private http: HttpClient) {
}

  getAllRecipes(): Promise<RecipeSummary[]> {
    return lastValueFrom(this.http.get<RecipeSummary[]>(this.serverRecipesUrl));
  }
/*   getAllRecipes(): Promise<RecipeSummary[]> {
    return this.
  } */
  getRecipe(recipeId: string): Promise<any> {
    return lastValueFrom(this.http.get(`http://localhost:8080/api/recipe/${recipeId}`))
  }
}
