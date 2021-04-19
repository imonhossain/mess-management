package com.imon.MessManagement.service;

import com.imon.MessManagement.dto.AccountDto;
import com.imon.MessManagement.model.Account;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.repository.AccountRepository;
import com.imon.MessManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    AccountRepository repository;

    @Autowired
    UserRepository userRepository;

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
//        rempository.deleteById(id);
//        return  1;
    }

    public List<Account> getAllDeposit() {
        return repository.getAllDeposit();
    }

    public List<AccountDto> getAllAmount() {
        List<AccountDto> accountDtos = new ArrayList<>();
        List<User> userList = userRepository.findAll();
        for(User user: userList){
            AccountDto accountDto = new AccountDto();
            List<Account> accountList = repository.findAllByUserId(user.getId());
            int totalAmount = 0;
            for(Account account:accountList){
                totalAmount += account.getAmount();
            }
            accountDto.setAmount(totalAmount);
            accountDto.setEmail(user.getEmail());
            accountDto.setName(user.getName());
            accountDtos.add(accountDto);
        }
        return accountDtos;
    }

}
