import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, of } from 'rxjs';
import { RECIPE } from './mock-recipes';
import { RecipeSummary } from './recipe';

@Injectable()
export class RecipeService {

private serverUrl = "http://localhost:8080/api/recipes";

constructor(private http: HttpClient) {
}

  getAllRecipes(): Promise<RecipeSummary[]> {
    return lastValueFrom(this.http.get<RecipeSummary[]>(this.serverUrl));
  }
/*   getAllRecipes(): Promise<RecipeSummary[]> {
    return this.
  } */
}
