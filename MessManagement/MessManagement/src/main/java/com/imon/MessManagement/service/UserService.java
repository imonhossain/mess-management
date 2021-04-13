package com.imon.MessManagement.service;


import com.imon.MessManagement.dto.UserDto;
import com.imon.MessManagement.form.UserForm;
import com.imon.MessManagement.model.User;
import com.imon.MessManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public List<User> getUsers() {
        return userRepository.findAll();

//        List<UserDto> userDtos = new ArrayList<>();
//        UserDto dto1 = new UserDto(1, "Badrul", "badrul@gmail.com", "01712680010",
//                "Jashore");
//        UserDto dto2 = new UserDto(2, "Imon", "imon@gmail.com", "01712680011",
//                "Narail");
//        UserDto dto3 = new UserDto(3, "Yeasin", "yeasin@gmail.com", "01712680012",
//                "Jashore");
//
//        userDtos.add(dto1);
//        userDtos.add(dto2);
//        userDtos.add(dto3);
//
//
//
//
//        return userDtos;
    }
    public UserDto saveUser(UserForm userForm) {

        UserDto userDto = new UserDto();

        userDto.setEmail(userForm.getEmail());
        userDto.setPassword(userForm.getPassword());
        userDto.setId(1);
        userDto.setMobile(userForm.getMobile());
        userDto.setName(userForm.getName());

        return userDto;
    }
}
