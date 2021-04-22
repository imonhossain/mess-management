package com.imon.MessManagement.dto;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class MealDto {
    private Integer userId;
    private String name;
    private String email;
    private BigDecimal totalMeal;
}
