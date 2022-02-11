import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeSummary } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipelist: RecipeSummary[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
