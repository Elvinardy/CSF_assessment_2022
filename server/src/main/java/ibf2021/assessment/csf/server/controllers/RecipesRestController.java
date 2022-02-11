package ibf2021.assessment.csf.server.controllers;

/* Write your request hander in this file */
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;

/* Write your request hander in this file */
@RestController
public class RecipesRestController {

    private static final Logger logger = LoggerFactory.getLogger(RecipesRestController.class);

    @Autowired
    private RecipeService recipeSvc;

    @CrossOrigin
    @GetMapping(path="api/recipes")
    public ResponseEntity<String> getRecipe() {
        List<Recipe> recipeLists = recipeSvc.getAllRecipes();

        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        recipeLists.stream().forEach(
            recipe -> arrBuilder.add(
                Json.createObjectBuilder()
                .add("id", recipe.getId())
                .add("title", recipe.getTitle())
            )
        );
        JsonArray jArray = arrBuilder.build();
        logger.info("Json Array " + jArray.toString());

        return ResponseEntity.ok(jArray.toString());
    }

}
