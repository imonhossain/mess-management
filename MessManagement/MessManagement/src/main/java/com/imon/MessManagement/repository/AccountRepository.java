package com.imon.MessManagement.repository;

import com.imon.MessManagement.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

    @Query("From Account")
//    @Query("SELECT User.name, Account.amount From Account INNER JOIN User ON User.id=Account.userId")
    List<Account> getAllDeposit ();
    List<Account> findAllByUserId(Integer userId);
}
