package com.imon.MessManagement.controller;
import com.imon.MessManagement.model.Meal;
import com.imon.MessManagement.service.MealService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/meal")
public class MealController {
    private final MealService service;

    public MealController(
            MealService service
    ) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<Meal>> getMeals() {
        List<Meal> mealList = service.getMeals();
        return new ResponseEntity<>(mealList, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Meal> saveMeal(@RequestBody Meal meal) {
        return new ResponseEntity<>(service.saveMeal(meal), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Meal>> getMealById(@PathVariable Integer id) {
        return new ResponseEntity<>(service.getMealById(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Meal> updateMeal(@RequestBody Meal meal){
        return new ResponseEntity<>(service.updateMeal(meal), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable Integer id){
        service.deleteMeal(id);
    }
}
