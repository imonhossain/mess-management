package com.imon.MessManagement.service;


import com.imon.MessManagement.dto.UserDto;
import com.imon.MessManagement.form.UserForm;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserByID(Integer id){
        return userRepository.findById(id);
    }

    public User updateUser(User user) {
        return  userRepository.save(user);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
