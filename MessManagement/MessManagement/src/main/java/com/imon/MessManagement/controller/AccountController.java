package com.imon.MessManagement.controller;

import com.imon.MessManagement.dto.AccountDto;
import com.imon.MessManagement.dto.DashboardReportDto;
import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.Meal;
import com.imon.MessManagement.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class AccountController {
    private final AccountService service;
    public AccountController(AccountService service){
        this.service = service;
    }
    @GetMapping("/account")
    public ResponseEntity<List<Account>> getAccounts(){
        return new ResponseEntity<>(service.getAccounts(), HttpStatus.OK);
    }

    @GetMapping("/account/report")
    public ResponseEntity<List<DashboardReportDto>> getDashboardReport(){
        return new ResponseEntity<>(service.getDashboardReport(), HttpStatus.OK);
    }


    @PostMapping("/account")
    public ResponseEntity<Account> saveAccount(@RequestBody Account accout){
        return  new ResponseEntity<>(service.saveAccount(accout), HttpStatus.CREATED);
    }
    @GetMapping("/account/{id}")
    public ResponseEntity<Optional<Account>> getAccountByID(@PathVariable Integer id){
        return new ResponseEntity<>(service.getAccountById(id), HttpStatus.OK);
    }
    @PutMapping("/account")
    public ResponseEntity<Account> updateAccount(@RequestBody Account accout){
        return  new ResponseEntity<>(service.updateAccount(accout), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Integer id){
        service.deleteAccount(id);
    }

    @GetMapping("/account/all-account-list")
    public ResponseEntity<List<AccountDto>> getAllAmount(){
        return new ResponseEntity<>(service.getAllAmount(), HttpStatus.OK);
    }

}
