package com.imon.MessManagement.controller;


import com.imon.MessManagement.dto.UserDto;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService service;

    public UserController(
            UserService service
    ) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<UserDto>> getUsers() {
        System.out.println("JHello");
        List<User> userList = service.getUsers();
        List<UserDto> userResponseList = new ArrayList<UserDto>();
        userList.stream().forEach(user -> {
            userResponseList.add(new UserDto(user));
        });
        return new ResponseEntity<>(userResponseList, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        System.out.println("JHello");
        return new ResponseEntity<>(service.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Integer id) {
        return new ResponseEntity<>(service.getUserByID(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<>(service.updateUser(user), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id){
        service.deleteUser(id);
    }




}
