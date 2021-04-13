package com.imon.MessManagement.repository;

import com.imon.MessManagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
//    CrudRepository<T,ID>
//    Pagin
}
