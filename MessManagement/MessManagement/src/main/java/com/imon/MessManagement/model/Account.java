package com.imon.MessManagement.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 5, nullable = false)
    private Integer amount;

    @Temporal(TemporalType.DATE)
    @Column(length = 100, nullable = false)
    private Date depositDate;

    @Column(length = 500)
    private String comment;

    @Column(nullable = false)
    private Integer userId;

}
