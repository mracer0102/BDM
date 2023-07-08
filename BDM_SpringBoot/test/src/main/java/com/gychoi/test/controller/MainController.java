package com.gychoi.test.controller;

import com.gychoi.test.dto.ResponseDto;
import com.gychoi.test.dto.UserResponseDto;
import com.gychoi.test.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MainController {
    private final UserServiceImpl userService;
    @Autowired
    public MainController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseDto<?> addUser(@RequestBody UserResponseDto requestBody) {
       ResponseDto<?> result = userService.registration(requestBody);
       return result;
    }

    @GetMapping("/list")
    public ResponseDto<?> listUser(@RequestParam String gender) {
        ResponseDto<?> result = userService.listByGender(gender);
        return result;
    }
}
