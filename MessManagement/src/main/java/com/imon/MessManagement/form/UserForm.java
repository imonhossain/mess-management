package com.imon.MessManagement.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserForm {
    private Integer id;
    private String name;
    private String email;
    private String mobile;
    private String password;
}
