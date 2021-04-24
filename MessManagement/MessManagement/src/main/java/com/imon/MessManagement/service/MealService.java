
package com.imon.MessManagement.service;
import com.imon.MessManagement.dto.AccountDto;
import com.imon.MessManagement.dto.MealDto;
import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Meal;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.repository.AccountRepository;
import com.imon.MessManagement.repository.MealRepository;
import com.imon.MessManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealService {
    @Autowired
    UserRepository userRepository;

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

    public List<Meal> findAllByUserId(Integer id) {
        return repository.findAllByUserId(id);
    }

    public List<MealDto> getAllUserWiseMeal() {
        List<MealDto> mealDtos = new ArrayList<>();
        List<User> userList = userRepository.findAll();
        for(User user: userList){
            MealDto mealDto = new MealDto();
            List<Meal> accountList = repository.findAllByUserId(user.getId());
            BigDecimal totalMeal = BigDecimal.valueOf(0);
            for(Meal meal:accountList){
                totalMeal = totalMeal.add(meal.getMealCount());
            }
            mealDto.setTotalMeal(totalMeal);
            mealDto.setEmail(user.getEmail());
            mealDto.setName(user.getName());
            mealDto.setUserId(user.getId());
            mealDtos.add(mealDto);
        }
        return mealDtos;
    }
}
