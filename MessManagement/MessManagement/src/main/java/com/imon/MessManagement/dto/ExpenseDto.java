package com.imon.MessManagement.dto;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ExpenseDto {
    private Integer id;
    private String name;
    private Date date;
    private Integer amount;
}
