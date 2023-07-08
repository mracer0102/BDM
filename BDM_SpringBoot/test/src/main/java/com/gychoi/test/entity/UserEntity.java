package com.gychoi.test.entity;

import com.gychoi.test.dto.UserResponseDto;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="User")
@Table(name="User")

public class UserEntity {
    @Id
    private String userId;
    private String userName;
    private String userAge;
    private String userEmail;
    private String userGender;

    public UserEntity(UserResponseDto dto) {
       userId = dto.getUserId();
       userName = dto.getUserName();
       userAge = dto.getUserAge();
       userEmail = dto.getUserEmail();
       userGender = dto.getUserGender();
    }
}
