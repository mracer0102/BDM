package com.gychoi.test.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserResponseDto {
    private String userId;
    private String userName;
    private String userAge;
    private String userEmail;
    private String userGender;
}
