import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipelistComponent } from './recipelist.component';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  @ViewChild(RecipelistComponent)
  recipeList!: RecipelistComponent;

  constructor(private recipeSvc: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  addRecipe() {
    const add = this.recipeList
  }

}
