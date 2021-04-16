package com.imon.MessManagement.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter
@Setter
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer userId;

    @Temporal(TemporalType.DATE)
    @Column(length = 100,  nullable = false)
    private Date mealDate;

    @Column(nullable = false)
    private BigDecimal mealCount;
}
