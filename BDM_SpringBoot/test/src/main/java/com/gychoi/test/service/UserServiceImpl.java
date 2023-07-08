package com.gychoi.test.service;

import com.gychoi.test.dto.ResponseDto;
import com.gychoi.test.dto.UserResponseDto;
import com.gychoi.test.entity.UserEntity;
import com.gychoi.test.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseDto<?> registration(UserResponseDto dto) {
        String userId = dto.getUserId();
        try {
            if (userRepository.existsById(userId)) {
                return ResponseDto.setFailed("Existed member");
            }
        } catch (Exception e) {
            return ResponseDto.setFailed("Database Error");
        }

        UserEntity userEntity = new UserEntity(dto);

        try {
            userRepository.save(userEntity);
        } catch (Exception e) {
            return ResponseDto.setFailed("Database Error");
        }
        return ResponseDto.setSuccess("Registration Success", null);
    }

    public ResponseDto<?> listByGender(String gender) {
        List<UserEntity> userList;
        try {
            userList = userRepository.findByUserGender(gender);
        } catch (Exception e) {
            return ResponseDto.setFailed("Database Error");
        }
        return ResponseDto.setSuccess("Registration Success", userList);
    }
}
