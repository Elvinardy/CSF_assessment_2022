import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipelistComponent } from './component/recipelist.component';
import { RecipedetailComponent } from './component/recipedetail.component';
import { RecipeAddComponent } from './component/recipe-add.component';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './materials.module';

const appRoutes: Routes = [
  { path: '', component: RecipelistComponent},
  { path: 'recipe/:recipeId', component: RecipedetailComponent},
  { path: 'add', component: RecipeAddComponent},
  { path: '**',redirectTo: '/', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
