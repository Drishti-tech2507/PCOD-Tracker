package com.lunessa.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.lunessa.backend.model.User;
import com.lunessa.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{email}")
    public User getProfile(@PathVariable String email){

        return userRepository
                .findByEmail(email)
                .orElse(null);
    }

}
