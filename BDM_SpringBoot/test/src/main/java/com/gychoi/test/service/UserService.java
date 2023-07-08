package com.gychoi.test.service;

import com.gychoi.test.dto.ResponseDto;
import com.gychoi.test.dto.UserResponseDto;

public interface UserService {
    public ResponseDto<?> registration(UserResponseDto dto);
    public ResponseDto<?> listByGender(String gender);
}
