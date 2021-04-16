
package com.imon.MessManagement.service;
import com.imon.MessManagement.model.Meal;
import com.imon.MessManagement.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealService {

    @Autowired
    MealRepository repository;

    public List<Meal> getMeals() {
        return repository.findAll();
    }

    public Meal saveMeal(Meal meal) {
        return repository.save(meal);
    }

    public Optional<Meal> getMealById(Integer id){
        return repository.findById(id);
    }

    public Meal updateMeal(Meal meal) {
        return  repository.save(meal);
    }

    public void deleteMeal(Integer id) {
        repository.deleteById(id);
    }
}
