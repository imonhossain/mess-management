package com.imon.MessManagement.controller;

import com.imon.MessManagement.model.Expense;
import com.imon.MessManagement.service.ExpenseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/expense")
public class ExpenseController {
    private final ExpenseService service;
    public ExpenseController(ExpenseService service){
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<Expense>> getAllExpense(){
        return new ResponseEntity<>(service.getAllExpense(), HttpStatus.OK);
    }
    @PostMapping("")
    public  ResponseEntity<Expense> saveExpense(@RequestBody Expense expense){
        return new ResponseEntity<>(service.saveExpense(expense), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Expense>> getExpenseById(@PathVariable Integer id){
        return new ResponseEntity<>(service.getExpenseById(id), HttpStatus.ACCEPTED);
    }

    @PutMapping("")
    public  ResponseEntity<Expense> updateExpense(@RequestBody Expense expense){
        return new ResponseEntity<>(service.updateExpense(expense), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Integer id){
        service.deleteExpense(id);
    }

}
