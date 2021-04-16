package com.imon.MessManagement.controller;

import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Meal;
import com.imon.MessManagement.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    private final AccountService service;
    public AccountController(AccountService service){
        this.service = service;
    }
    @GetMapping("")
    public ResponseEntity<List<Account>> getAccounts(){
        return new ResponseEntity<>(service.getAccounts(), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<Account> saveAccount(@RequestBody Account accout){
        return  new ResponseEntity<>(service.saveAccount(accout), HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Account>> getAccountByID(@PathVariable Integer id){
        return new ResponseEntity<>(service.getAccountById(id), HttpStatus.OK);
    }
    @PutMapping("")
    public ResponseEntity<Account> updateAccount(@RequestBody Account accout){
        return  new ResponseEntity<>(service.updateAccount(accout), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Integer id){
        service.deleteAccount(id);
    }

}
