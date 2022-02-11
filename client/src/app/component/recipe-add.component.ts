import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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


  constructor(private fb: FormBuilder, private recipeSvc: RecipeService, private router: Router) { }

  ngOnInit(): void {
   /*  this.resetForm(); */
   this.form = this.fb.group({
      title: this.fb.control('', [Validators.required,
        Validators.minLength(3)]),
      image: this.fb.control('', Validators.required),
      instruction: this.fb.control('', [Validators.required,
        Validators.minLength(3)]),
      ingredient: this.fb.array([new FormControl
        ('',[Validators.required, Validators.minLength(3)]),
       ])
    })
  }

  addUserInput() {
    const ctrl = new FormControl('',[Validators.required,
    Validators.minLength(3)]);
    (<FormArray>this.form.get('ingredients')).push(ctrl);
  }

  deleteInput(i: number) {
    (<FormArray>this.form.get('ingredients')).removeAt(i);
  }

  getFormArray(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  goBack(): void{
    this.router.navigate(['/']);
  }

  submitForm(): void {

  }

}
