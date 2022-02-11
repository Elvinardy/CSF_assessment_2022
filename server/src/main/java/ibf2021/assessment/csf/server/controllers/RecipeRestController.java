package ibf2021.assessment.csf.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

@RestController
public class RecipeRestController {
    
    @Autowired
    RecipeService recipeSvc;

    @CrossOrigin
    @GetMapping(value="/api/recipe/{recipeId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRecipeById(@PathVariable String recipeId) {
         Optional<Recipe> singleRecipe = recipeSvc.getRecipeById(recipeId);
         Recipe recipe = new Recipe();
        if(singleRecipe.isPresent()) {
            recipe = singleRecipe.get();
        } else {
            ResponseEntity.notFound().build();
        }

        JsonObject jo = Json.createObjectBuilder()
                .add("title", recipe.getTitle())
                .add("image", recipe.getImage())
                .add("instruction", recipe.getInstruction())
                .add("ingredients", Json.createArrayBuilder(recipe.getIngredients()))
                .build();

                return ResponseEntity.ok(jo.toString());
    }
}