package com.imon.MessManagement.controller;


import com.imon.MessManagement.dto.UserDto;
import com.imon.MessManagement.form.UserForm;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private final UserService service;

    public UserController(
            UserService service
    ) {
        this.service = service;
    }

    @GetMapping("/get")
    public ResponseEntity<List<UserDto>> getUsers() {
        List<User> userList = service.getUsers();
        List<UserDto> userResponseList = new ArrayList<UserDto>();
        userList.stream().forEach(user -> {
            userResponseList.add(new UserDto(user));
        });
        return new ResponseEntity<>(userResponseList, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<UserDto> saveUser(@RequestBody UserForm userForm) {
        return new ResponseEntity<>(service.saveUser(userForm), HttpStatus.CREATED);
    }
}
