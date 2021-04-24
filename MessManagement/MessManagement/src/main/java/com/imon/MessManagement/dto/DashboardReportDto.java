package com.imon.MessManagement.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.text.DecimalFormat;

@Getter
@Setter
public class DashboardReportDto {
    private Integer userId;
    private String name;
    private String email;
    private BigDecimal totalMeal;
    private Integer totalDeposit;
}
