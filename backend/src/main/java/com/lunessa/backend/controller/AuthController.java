package com.lunessa.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunessa.backend.model.User;
import com.lunessa.backend.repository.UserRepository;
import com.lunessa.backend.service.EmailService;
import com.lunessa.backend.util.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    // =====================================================
    // 🌸 SIGNUP API
    // =====================================================

    @PostMapping("/signup")

    public ResponseEntity<?> signup(
            @RequestBody User user
    ) {

        Optional<User> existingUser =
                userRepository.findByEmail(
                        user.getEmail()
                );

        // 🌸 EMAIL ALREADY EXISTS
        if (existingUser.isPresent()) {

            Map<String, Object> errorResponse =
                    new HashMap<>();

            errorResponse.put(
                    "message",
                    "Email already exists"
            );

            return ResponseEntity
                    .badRequest()
                    .body(errorResponse);
        }

        // =====================================================
        // 🌸 DEFAULT VALUES
        // =====================================================

        user.setLoginCount(0);

        user.setTotalOrders(0);

        user.setWellnessScore(92);

        user.setSelfCareDays(0);

        user.setSavedPlans("");

        user.setRecentOrders("");

        // DEFAULT PROFILE IMAGE
        user.setImage(
                "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        );

        // =====================================================
        // 🌸 SAVE USER
        // =====================================================

        userRepository.save(user);

        // =====================================================
        // 🌸 SEND WELCOME EMAIL
        // =====================================================

        emailService.sendWelcomeEmail(
                user.getEmail(),
                user.getName()
        );

        // =====================================================
        // 🌸 GENERATE JWT TOKEN
        // =====================================================

        String token =
                jwtUtil.generateToken(
                        user.getEmail()
                );

        // =====================================================
        // 🌸 RESPONSE
        // =====================================================

        Map<String, Object> response =
                new HashMap<>();

        response.put(
                "message",
                "Signup successful"
        );

        response.put(
                "token",
                token
        );

        response.put(
                "email",
                user.getEmail()
        );

        response.put(
                "name",
                user.getName()
        );

        response.put(
                "loginCount",
                user.getLoginCount()
        );

        response.put(
                "totalOrders",
                user.getTotalOrders()
        );

        return ResponseEntity.ok(response);
    }

    // =====================================================
    // 🌸 LOGIN API
    // =====================================================

    @PostMapping("/login")

    public ResponseEntity<?> login(
            @RequestBody User loginUser
    ) {

        Optional<User> userOptional =
                userRepository.findByEmail(
                        loginUser.getEmail()
                );

        // =====================================================
        // 🌸 USER NOT FOUND
        // =====================================================

        if (userOptional.isEmpty()) {

            Map<String, Object> errorResponse =
                    new HashMap<>();

            errorResponse.put(
                    "message",
                    "User not found"
            );

            return ResponseEntity
                    .badRequest()
                    .body(errorResponse);
        }

        User user = userOptional.get();

        // =====================================================
        // 🌸 INVALID PASSWORD
        // =====================================================

        if (!user.getPassword().equals(
                loginUser.getPassword()
        )) {

            Map<String, Object> errorResponse =
                    new HashMap<>();

            errorResponse.put(
                    "message",
                    "Invalid password"
            );

            return ResponseEntity
                    .badRequest()
                    .body(errorResponse);
        }

        // =====================================================
        // 🌸 UPDATE LOGIN COUNT
        // =====================================================

        user.setLoginCount(
                user.getLoginCount() + 1
        );

        // SELF CARE DAYS
        user.setSelfCareDays(
                user.getLoginCount()
        );

        // SAVE UPDATED USER
        userRepository.save(user);

        // =====================================================
        // 🌸 SEND WELCOME BACK EMAIL
        // =====================================================

        emailService.sendWelcomeBackEmail(
                user.getEmail(),
                user.getName()
        );

        // =====================================================
        // 🌸 GENERATE JWT TOKEN
        // =====================================================

        String token =
                jwtUtil.generateToken(
                        user.getEmail()
                );

        // =====================================================
        // 🌸 RESPONSE
        // =====================================================

        Map<String, Object> response =
                new HashMap<>();

        response.put(
                "message",
                "Login successful"
        );

        response.put(
                "token",
                token
        );

        response.put(
                "email",
                user.getEmail()
        );

        response.put(
                "name",
                user.getName()
        );

        response.put(
                "loginCount",
                user.getLoginCount()
        );

        response.put(
                "totalOrders",
                user.getTotalOrders()
        );

        response.put(
                "savedPlans",
                user.getSavedPlans()
        );

        response.put(
                "recentOrders",
                user.getRecentOrders()
        );

        response.put(
                "wellnessScore",
                user.getWellnessScore()
        );

        response.put(
                "selfCareDays",
                user.getSelfCareDays()
        );

        response.put(
                "image",
                user.getImage()
        );

        return ResponseEntity.ok(response);
    }
}