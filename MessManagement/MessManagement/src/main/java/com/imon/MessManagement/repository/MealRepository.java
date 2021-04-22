package com.imon.MessManagement.repository;

import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Integer> {
    List<Meal> findAllByUserId(Integer userId);
}
