import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
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

  form!: FormGroup;

  constructor(private fb: FormBuilder, private recipeSvc: RecipeService) { }

  ngOnInit(): void {
   /*  this.resetForm(); */

  }

  createAddForm() {
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      ingredient: this.fb.array('',[Validators.required, Validators.minLength(3)]);
    })
  }

  addRecipe() {
    const add = this.recipeList
  }

}
