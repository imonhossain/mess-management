package com.imon.MessManagement.service;

import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    AccountRepository repository;

    public List<Account> getAccounts() {
        return repository.findAll();
    }

    public Account saveAccount(Account account) {
        return repository.save(account);
    }

    public Optional<Account> getAccountById(Integer id){
        return repository.findById(id);
    }

    public Account updateAccount(Account account) {
        return  repository.save(account);
    }

    public void deleteAccount(Integer id) {
        repository.deleteById(id);
    }
}
