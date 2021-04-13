package com.imon.MessManagement.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true, length = 100)
    private String name;
    @Column(unique = true, nullable = false, length = 100)
    private String email;
    private String mobile;
    private String password;
}
