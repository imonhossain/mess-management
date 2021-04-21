package com.imon.MessManagement.service;

import com.imon.MessManagement.dto.AccountDto;
import com.imon.MessManagement.dto.ExpenseDto;
import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Expense;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.repository.ExpenseRepository;
import com.imon.MessManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ExpenseRepository repository;
    public List<Expense> getAllExpense(){
        return repository.findAll();
    }
    public Expense saveExpense(Expense expense){
        return repository.save(expense);
    }
    public Optional<Expense> getExpenseById(Integer id){
        return repository.findById(id);
    }
    public Expense updateExpense(Expense expense){
        return repository.save(expense);
    }
    public void deleteExpense(Integer id){
         repository.deleteById(id);
    }
    public List<ExpenseDto> getAllExpenseWithName() {
        List<ExpenseDto> expenseDtos = new ArrayList<>();

        List<Expense> expenseList = repository.findAll();

        for(Expense expense:expenseList){
            ExpenseDto expenseDto = new ExpenseDto();
            List<User> users =  userRepository.findAllById(Collections.singleton(expense.getUserId()));
            expenseDto.setAmount(expense.getAmount());
            expenseDto.setDate(expense.getExpenseDate());
            expenseDto.setId(expense.getId());
            for(User user: users){
                expenseDto.setName(user.getName());
            }
          expenseDtos.add(expenseDto);
        }
        return expenseDtos;
    }
}
