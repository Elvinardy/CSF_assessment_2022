import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom, Observable, of } from 'rxjs';
import { RECIPE } from './mock-recipes';
import { Recipe, RecipeSummary } from './recipe';

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

  saveRecipe(recipe: Recipe): Promise<any> {
    const headers = new HttpHeaders()
          .set('Content-type' , 'application/json')
          .set('Accept', 'application/json');
        return lastValueFrom(
          this.http.post(`${this.SingleRecipeUrl}`,JSON.stringify(recipe),
          { headers : headers, })
        )


  }
}
