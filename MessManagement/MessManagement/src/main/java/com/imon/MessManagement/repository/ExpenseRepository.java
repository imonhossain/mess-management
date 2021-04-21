package com.imon.MessManagement.repository;

import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
    List<Expense> findAllByUserId(Integer userId);
}
